
const SKILLS_LIST = [
  { pid: "661", name: "Responsive Design", status: "[RUNNING]", isRunning: true },
  { pid: "662", name: "UI/UX Design", status: "[RUNNING]", isRunning: true },
  { pid: "663", name: "Figma / Canva", status: "[RUNNING]", isRunning: true },
  { pid: "664", name: "React + Vite", status: "[RUNNING]", isRunning: true },
  { pid: "665", name: "Mobile Development", status: "[RUNNING]", isRunning: true },
  { pid: "666", name: "Python + FastAPI", status: "[RUNNING]", isRunning: true },
  { pid: "667", name: "Payment Integration", status: "[RUNNING]", isRunning: true },
  { pid: "668", name: "Automation / Workflow Systems", status: "[RUNNING]", isRunning: true },
  { pid: "669", name: "Cloud Deployment", status: "[RUNNING]", isRunning: true },
  { pid: "670", name: "Git + GitHub", status: "[RUNNING]", isRunning: true },
  { pid: "671", name: "Open Source Project Collaboration", status: "[RUNNING]", isRunning: true },
  { pid: "672", name: "ONNX / Local AI", status: "[RUNNING]", isRunning: true },
  { pid: "673", name: "ANPR / CV Systems", status: "[RUNNING]", isRunning: true },
  { pid: "674", name: "IoT + Embedded Systems", status: "[RUNNING]", isRunning: true },
  { pid: "675", name: "Prompt Engineering", status: "[RUNNING]", isRunning: true },
  { pid: "676", name: "Sleeping Early", status: "[NOT FOUND]", isRunning: false }
];

const DAILY_TOOLS = [
  "VS Code",
  "Git Bash / Terminal",
  "Postman / Insomnia",
  "Docker Containers",
  "Vercel / Netlify",
  "Antigravity",
  "",
  "DATABASE",
  "XAMPP",
  "PostgreSQL",
  "MySQL"
];

const LEARNING_LIST = [
  {
    category: "WEB & FRONTEND",
    items: "TypeScript, Next.js, Tailwind CSS"
  },
  {
    category: "AI & ML",
    items: "Computer Vision (OpenCV), Reinforcement Learning"
  },
  {
    category: "BACKEND & SECURITY",
    items: "Event-driven Architecture, Pentesting Basics"
  },
  {
    category: "HARDWARE & IOT",
    items: "WebGPU Shader Language, BLE Protocol"
  }
];

const FAMILIARITY_LIST = [
  {
    category: "CODE LANGUAGES",
    items: "HTML, CSS, Python, PHP, JS, C++"
  },
  {
    category: "OFFICE & WORKSPACE",
    items: "MS Office, Google Workspace, Apps Script"
  },
  {
    category: "AI IDEs & PROMPTING",
    items: "Cursor, Windsurf, Antigravity, Claude CLI"
  },
  {
    category: "COMPANIONS & AUTOMATION",
    items: "Claude AI, ChatGPT, Gemini, n8n, NotebookLM"
  },
  {
    category: "HARDWARE & IOT",
    items: "ESP32, Arduino Uno, Arduino IDE, Raspberry Pi"
  },
  {
    category: "BUSINESS & PAYMENTS",
    items: "Wise, Stripe, PayMongo"
  },
  {
    category: "MOBILE & CROSS-PLATFORM",
    items: "Android Studio"
  },
  {
    category: "AI & ML TRAINING",
    items: "Google Colab (T4 GPU), onnxruntime-web, ngrok"
  }
];

export default function Skills() {
  return (
    <div className="slide-inner">
      <div className="slide-header-brand">eggie.dev / v1.0</div>

      <div className="skills-grid" style={{ margin: 'auto 0' }}>
        {/* Left Side: Active Processes List */}
        <div className="skills-left">
          <div className="label" style={{ marginBottom: '16px' }}>// active processes</div>
          <div className="monitor-title">PROCESS LIST — ACTIVE SKILLS</div>
          <table className="skills-table">
            <thead>
              <tr>
                <th>PID</th>
                <th>NAME</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {SKILLS_LIST.map((skill, idx) => (
                <tr key={idx}>
                  <td style={{ opacity: 0.5 }}>{skill.pid}</td>
                  <td>{skill.name}</td>
                  <td>
                    <span className={skill.isRunning ? "status-running" : "status-not-found"}>
                      {skill.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side: Tools & Learning */}
        <div className="skills-right">
          <div className="skills-right-col">
            <h4 className="skills-right-title">TOOLS I USE DAILY</h4>
            <ul className="skills-right-list">
              {DAILY_TOOLS.map((tool, idx) => (
                <li key={idx}>
                  {tool ? `:: ${tool}` : '\u00A0'}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-right-col">
            <h4 className="skills-right-title">CURRENTLY LEARNING</h4>
            <div className="skills-learning-grid">
              {LEARNING_LIST.map((group, idx) => {
                const isLast = idx === LEARNING_LIST.length - 1;
                return (
                  <div key={idx} className="skills-learning-item">
                    <span className="label" style={{ display: 'block', marginBottom: '6px' }}>
                      // {group.category}
                    </span>
                    <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                      {group.items}
                      {isLast && <span className="blinking-cursor"></span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-right-col skills-span-2">
            <h4 className="skills-right-title">KNOWLEDGE & FAMILIARITY</h4>
            <div className="skills-knowledge-grid">
              {FAMILIARITY_LIST.map((group, idx) => (
                <div key={idx} className="skills-knowledge-item">
                  <span className="label" style={{ display: 'block', marginBottom: '6px' }}>
                    // {group.category}
                  </span>
                  <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                    {group.items}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '20px' }}></div>
    </div>
  );
}
