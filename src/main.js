<!DOCTYPE html>
<html lang="ar" dir="rtl" manifest="cache.manifest">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>شركة أورجينال أسيوط - ش الجمهورية - بجوار فرع فودافون</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #ffffff;
    }

    body {
      background-image: url('icon0.jpg');
      background-size: 100% 95%;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-color: #1a1a24;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
      padding: 30px 20px;
      gap: 20px;
      text-align: center;
    }

    .container {
      background: rgba(15, 15, 25, 0.75);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      padding: 25px 30px;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 8px;
      color: #4facfe;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 400;
      color: #00f2fe;
      margin-bottom: 15px;
    }

    hr {
      border: none;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      margin: 15px 0 20px 0;
    }

    .btn-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
    }

    #kernel-options {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.3);
      padding: 10px 20px;
      border-radius: 30px;
    }

    #kernel-options label {
      cursor: pointer;
      font-weight: bold;
    }

    #jailbreak {
      background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
      color: #000;
      font-weight: bold;
      font-size: 1.2rem;
      border: none;
      padding: 12px 35px;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
    }

    #jailbreak:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 242, 254, 0.5);
    }

    .autoJb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.95rem;
      margin-top: 5px;
    }

    /* تثبيت الكنسول ووضع شريط تمرير */
    #console {
      display: block !important;
      direction: ltr !important;
      text-align: left !important;
      
      background: rgba(15, 15, 25, 0.75);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      padding: 20px;
      max-width: 500px;
      width: 90%;
      height: 180px;
      max-height: 250px;
      overflow-y: auto;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
      
      word-break: break-word;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>Original Host</h1>
    <h3 id="UA">Running on:</h3>

    <hr>

    <div class="btn-container">
      <form id="kernel-options">
        <input type="radio" name="kernel" id="netctrl-exploit" value="netctrl">
        <label for="netctrl-exploit">NetCtrl</label>
        
        <input type="radio" name="kernel" id="lapse-exploit" value="lapse" checked>
        <label for="lapse-exploit">Lapse</label>
      </form>

      <button id="jailbreak" onclick="runMainJailbreak()">Jailbreak</button>

      <div class="autoJb">
        <input id="autoJbInput" type="checkbox">
        <label for="autoJbInput" id="autoJbLabel">Auto Jailbreak</label>
      </div>
    </div>
  </div>

  <pre id="console">Initializing Cache & System...</pre>

  <!-- تحميل السكريبتات بالترتيب المطلوب -->
  <script src="includes/script.js"></script>
  <script src="src/main.js"></script>

  <script>
    document.getElementById("UA").innerText = "Running on: " + navigator.userAgent;

    function printConsole(text) {
      const consoleElem = document.getElementById("console");
      if (consoleElem) {
        consoleElem.innerText += "\n" + text;
        consoleElem.scrollTop = consoleElem.scrollHeight;
      }
    }

    // دالة بدء تشغيل الثغرة المباشرة
    async function runMainJailbreak() {
      // 1. تحديد خيار الثغرة المحدد (lapse أو netctrl)
      const selectedRadio = document.querySelector('input[name="kernel"]:checked');
      window.exploitChain = selectedRadio ? selectedRadio.value : "lapse";

      printConsole("[+] Selected exploit chain: " + window.exploitChain);
      printConsole("[+] Executing doJb()...");

      // 2. تشغيل دالة doJb المعرفة في main.js
      if (typeof doJb === "function") {
        try {
          await doJb();
        } catch (err) {
          printConsole("[!] Error during execution: " + err.message);
        }
      } else {
        printConsole("[!] Error: doJb() function not loaded yet.");
      }
    }

    // إدارة Auto Jailbreak (غير مفعل افتراضياً)
    window.addEventListener('load', () => {
      const autoJbInput = document.getElementById('autoJbInput');
      const isAutoStored = localStorage.getItem('autoJb');

      if (isAutoStored === 'true') {
        if (autoJbInput) autoJbInput.checked = true;
      } else {
        if (autoJbInput) autoJbInput.checked = false;
        localStorage.setItem('autoJb', 'false');
      }

      if (autoJbInput) {
        autoJbInput.addEventListener('change', (e) => {
          localStorage.setItem('autoJb', e.target.checked ? 'true' : 'false');
        });
      }
    });

    // تتبع حالة الكاش
    if (window.applicationCache) {
      const appCache = window.applicationCache;

      appCache.addEventListener('checking', () => printConsole("Checking cache..."));
      appCache.addEventListener('downloading', () => printConsole("Downloading offline cache..."));
      appCache.addEventListener('progress', (e) => printConsole("Caching: " + Math.round((e.loaded / e.total) * 100) + "%"));
      
      appCache.addEventListener('cached', () => {
        printConsole("Cached successfully! Offline mode ready.");
        checkAutoJb();
      });

      appCache.addEventListener('noupdate', () => {
        printConsole("Cache up to date. Ready.");
        checkAutoJb();
      });

      appCache.addEventListener('error', () => {
        printConsole("Cache error or offline mode active.");
        checkAutoJb();
      });
    }

    function checkAutoJb() {
      const autoJbInput = document.getElementById('autoJbInput');
      if (autoJbInput && autoJbInput.checked) {
        printConsole("Auto Jailbreak is enabled. Triggering in 1s...");
        setTimeout(() => {
          runMainJailbreak();
        }, 1000);
      }
    }
  </script>
</body>
</html>
