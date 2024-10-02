function ChucklePostAI(config) {
    // 获取要插入 AI 的文章容器
    function getArticleContainer() {
      let container = null;
      if (!config.auto_mount && config.el) {
        container = document.querySelector(
          config.el || "#post #article-container"
        );
      }
      return container || findLargestContentElement();
    }
  
    // 计算一个元素的子元素的数量
    function countChildElements(element) {
      let count = 1;
      Array.from(element.children).forEach((child) => {
        count += countChildElements(child);
      });
      return count;
    }
  
    // 检查一个元素是否应被排除（如 iframe、footer 等）
    function shouldExcludeElement(element) {
      const tagBlacklist = ["IFRAME", "FOOTER", "HEADER", "BLOCKQUOTE"];
      const classBlacklist = ["aplayer", "comment"];
      return (
        tagBlacklist.includes(element.tagName) ||
        Array.from(element.classList).some((className) =>
          classBlacklist.some((cls) => className.includes(cls))
        )
      );
    }
  
    // 查找内容最多的 DOM 元素
    function findLargestContentElement() {
      const rootElement = findRootElement();
      return findLargestElementInTree(rootElement);
    }
  
    // 查找内容最多的根元素
    function findRootElement() {
      const elementsToCheck = [document.body];
      let rootElement = null;
      let maxCount = 0;
  
      while (elementsToCheck.length > 0) {
        const element = elementsToCheck.shift();
        if (shouldExcludeElement(element)) continue;
  
        const childCount = countChildElements(element);
        if (childCount > maxCount) {
          maxCount = childCount;
          rootElement = element;
        }
  
        Array.from(element.children).forEach((child) => {
          elementsToCheck.push(child);
        });
      }
      return rootElement;
    }
  
    // 查找最大的 DOM 元素
    function findLargestElementInTree(rootElement) {
      const weightMap = { H1: 1.5, H2: 1, H3: 0.5, P: 1 };
      let maxWeight = 0;
      let largestElement = null;
  
      function calculateWeight(element) {
        if (shouldExcludeElement(element)) return;
        let elementWeight = Array.from(element.children).reduce(
          (weight, child) => {
            return weight + (weightMap[child.tagName] || 0);
          },
          0
        );
  
        if (elementWeight > maxWeight) {
          maxWeight = elementWeight;
          largestElement = element;
        }
  
        Array.from(element.children).forEach(calculateWeight);
      }
  
      calculateWeight(rootElement);
      return largestElement;
    }
  
    // 创建并插入 AI 的 UI 元素
    function createAIElement() {
      const aiContainer = document.createElement("div");
      aiContainer.className = "post-ai";
      aiContainer.id = "post-ai";
      aiContainer.style.cssText = `
        margin: 30px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      `;
      const aiInterface = {
        name: "文章辅助AI",
        introduce: "我是文章辅助AI，点击下方的按钮，让我生成本文简介",
        version: "gpt-3.5-turbo-16k",
        buttons: ["介绍自己", "生成摘要"],
        ...config.interface,
      };
  
      aiContainer.innerHTML = `
        <div class="ai-title">
          <div class="ai-title-text">${aiInterface.name}</div>
          <div class="ai-Toggle">切换简介</div>
          <div class="ai-speech-box">
            <div class="ai-speech-content"></div>
          </div>
          <div class="ai-tag">${aiInterface.version}</div>
        </div>
        <div class="ai-explanation">${aiInterface.name}初始化中...</div>
        <div class="ai-btn-box">
          ${aiInterface.buttons
            .map((btn) => `<div class="ai-btn-item">${btn}</div>`)
            .join("")}
        </div>
      `;
  
      bindButtonEvents(aiContainer);
  
      const articleContainer = getArticleContainer();
      if (articleContainer) {
        articleContainer.insertBefore(aiContainer, articleContainer.firstChild);
      }
      generateSummary(); // 初始化时生成文章摘要
    }
  
    // 绑定按钮事件
    function bindButtonEvents(aiContainer) {
      const generateIntroductionButton = aiContainer.querySelector(
        ".ai-btn-item:first-child"
      );
      generateIntroductionButton.addEventListener("click", () => {
        displaySummary(
          "我是文章辅助AI，使用的OpenAI的GPT-3.5-turbo-16k模型。点击下方的按钮，让我生成本文简介。"
        );
      });
  
      const generateSummaryButton = aiContainer.querySelector(
        ".ai-btn-item:last-child"
      );
      generateSummaryButton.addEventListener("click", generateSummary);
    }
  
    // 生成文章摘要
    async function generateSummary() {
      const content = getArticleContent();
      const apiKey = "请替换为你的实际 API KEY"; // 请替换为你的实际 API KEY
      const requestBody = {
        model: "gpt-3.5-turbo-16k",
        messages: [
          {
            role: "system",
            content:
              "请为下面的内容生成摘要，以本文讲述了开头，不要出现任何与文章无关的内容。",
          },
          { role: "user", content: content },
        ],
        temperature: 0,
      };
  
      try {
        const response = await fetch("https://free.gpt.ge/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(requestBody),
        });
  
        if (!response.ok) {
          throw new Error("网络响应不是 OK");
        }
  
        const data = await response.json();
        displaySummary(data.choices[0].message.content);
        console.log("摘要生成成功:", data.choices[0].message.content);
      } catch (error) {
        console.error("请求失败:", error);
      }
    }
  
    // 获取文章内容
    function getArticleContent() {
      const articleContainer = getArticleContainer();
      return articleContainer ? articleContainer.innerText : ""; // 获取文章的文本内容
    }
  
    // 显示生成的摘要（添加打字机效果）
    function displaySummary(summary) {
      const aiSpeechContent = document.querySelector(".ai-explanation");
      if (aiSpeechContent) {
        aiSpeechContent.innerText = ""; // 清空之前的内容
        typeWriterEffect(aiSpeechContent, summary, 15); // 逐字显示摘要
      }
    }
  
    // 打字机效果
    function typeWriterEffect(element, text, delay) {
      let index = 0;
      function type() {
        if (index < text.length) {
          element.innerText += text.charAt(index);
          index++;
          setTimeout(type, delay);
        }
      }
      type();
    }
  
    // 初始化函数
    function initialize() {
      createAIElement();
    }
  
    initialize();
  }
  