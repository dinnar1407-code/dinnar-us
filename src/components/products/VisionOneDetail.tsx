import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

/**
 * VisionOne 产品详情页（slug: p-1072）的专用版式。
 *
 * 为什么单独写一个组件：通用产品详情模板只有「一张图 + 标题列表」，
 * 放不下 VisionOne 需要的功能详述、应用场景和多张界面截图。
 * 所以在 [slug]/page.tsx 里对 p-1072 做特判，渲染这个组件，其余产品不受影响。
 *
 * 文案原则：只写界面里真实存在的功能，不写任何未经产线验证的精度/节拍数字。
 */

type Lang = "en" | "zh";
type Bi = Record<Lang, string>;

// 截图统一放在 public/images/products/visionone/ 下
const IMG = "/images/products/visionone";

// ───────────────────────── 文案数据（中英双语） ─────────────────────────

/** 首屏下方的四个「为什么是 AI-Native」卡片 */
const PILLARS: Array<{ icon: typeof Cpu; title: Bi; desc: Bi }> = [
  {
    icon: Sparkles,
    title: { zh: "用自然语言驱动视觉工程", en: "Drive vision projects in plain language" },
    desc: {
      zh: "在 Copilot 面板里直接说「把 PatSky 定位 1 的最低分改成 0.35」「运行」，平台完成改参、执行并逐算子回报耗时与结果，不必逐个打开工具对话框。",
      en: "Tell the Copilot panel “set the minimum score of PatSky Locate 1 to 0.35” or “run”. The platform edits the parameter, executes the flow and reports time and result for every tool — no dialog hunting.",
    },
  },
  {
    icon: ShieldCheck,
    title: { zh: "每一次 AI 改动都可审计、可回滚", en: "Every AI change is auditable and reversible" },
    desc: {
      zh: "AI 修改参数之前，平台先把整份工程落盘为回滚点，带批次号、时间、操作者与快照校验值；不满意可以一键回到任意一个回滚点。",
      en: "Before the AI touches a parameter, the whole project is snapshotted to disk as a rollback point with batch ID, timestamp, actor and checksum. One click returns you to any earlier point.",
    },
  },
  {
    icon: Layers,
    title: { zh: "研发与现场，两套权限两种界面", en: "Two cockpits: engineering and shop floor" },
    desc: {
      zh: "研发开发舱开放全量算子与流程编排；现场运维舱锁定流程结构，只允许在安全范围内微调，避免现场误操作改坏算法。",
      en: "The Dev Cockpit exposes the full tool library and flow editing. The O&M Cockpit locks the flow structure and only allows bounded fine-tuning, so line staff cannot break the algorithm by accident.",
    },
  },
  {
    icon: Network,
    title: { zh: "对外开放的 Agent 接口", en: "An open interface for AI agents" },
    desc: {
      zh: "平台内置 MCP 工具服务，外部 AI Agent 可以通过标准协议查询算子、评估参数、校验工程；Copilot 背后的大模型引擎也可按需配置。",
      en: "A built-in MCP tool service lets external AI agents list tools, evaluate parameters and validate projects through a standard protocol. The LLM engine behind Copilot is configurable.",
    },
  },
];

/** 图文交替的功能详述区块 */
const FEATURES: Array<{
  tag: Bi;
  title: Bi;
  desc: Bi;
  points: Bi[];
  image: string;
  alt: Bi;
}> = [
  {
    tag: { zh: "Vision Copilot", en: "Vision Copilot" },
    title: { zh: "对话式调参：说一句，改一处，立刻验证", en: "Conversational tuning: say it, change it, verify it" },
    desc: {
      zh: "Copilot 常驻在主界面右侧。工程师用一句话描述要改什么，Copilot 定位到具体算子的具体参数完成修改，并可立即触发整条流程运行，把每个算子的耗时、匹配结果、测量值和最终 OK/NG 判定逐条回报在对话里。",
      en: "Copilot lives on the right side of the main window. Describe the change in one sentence; Copilot locates the exact parameter of the exact tool, applies it, and can run the whole flow right away — reporting per-tool time, match results, measurements and the final OK/NG verdict in the conversation.",
    },
    points: [
      { zh: "自然语言定位到「算子 + 参数」，修改前后数值在对话中留痕", en: "Natural language resolves to a specific tool and parameter; before/after values stay in the transcript" },
      { zh: "一句「运行」触发单帧实测，逐算子回报耗时与结果", en: "“Run” triggers a single-frame test with per-tool timing and results" },
      { zh: "参数受类型与取值范围校验，写不进去的修改会被明确拒绝并说明原因", en: "Parameters are validated by type and range; rejected edits are reported with the reason" },
      { zh: "常用工程与测试流程做成快捷按钮，一键装载", en: "Common projects and test flows are available as one-click shortcuts" },
    ],
    image: `${IMG}/copilot-dialog.jpg`,
    alt: { zh: "Copilot 对话特写：用自然语言修改 PatSky 最低分并运行流程，逐算子回报结果", en: "Copilot close-up: editing the PatSky minimum score in natural language and running the flow with per-tool results" },
  },
  {
    tag: { zh: "自适应调参", en: "Adaptive tuning" },
    title: { zh: "先回放验证，再落盘；每次改动都留回滚点", en: "Replay first, write later — with a rollback point behind every change" },
    desc: {
      zh: "换线、来料批次变化或光照漂移导致误报时，传统做法是资深工程师到现场凭经验反复试。VisionOne 把这个过程交给 Copilot：在离线数据集上对候选参数逐一回放，对比过杀与漏检，生成审计报告；只有不劣于现状的参数才会被写入工程，否则自动回退。每次写入前平台都会生成回滚点，记录批次号、时间、操作者与改动内容。",
      en: "When a changeover, a new material lot or lighting drift causes false calls, the usual fix is a senior engineer iterating on site. VisionOne hands this loop to Copilot: candidate values are replayed on an offline dataset, overkill and escape rates are compared, and an audit report is produced. Only a value that is no worse than the current one is written to the project; otherwise it is rolled back. A rollback point with batch ID, time, actor and change summary is created before every write.",
    },
    points: [
      { zh: "离线数据集批量回放，候选参数逐个实测而不是估算", en: "Offline datasets are replayed in batch; every candidate value is actually measured" },
      { zh: "以过杀率、漏检率、耗时为判据生成审计报告", en: "Audit report based on overkill rate, escape rate and cycle time" },
      { zh: "审核通过才落盘，未通过自动回退，全程不影响在线生产工程", en: "Written only after passing the audit, reverted otherwise — the production project is never touched meanwhile" },
      { zh: "现场防误报调参入口，把调参范围限制在安全区间内", en: "A dedicated false-call tuning entry keeps adjustments inside a safe range" },
    ],
    image: `${IMG}/rollback-points.jpg`,
    alt: { zh: "工程回滚点列表：AI 改参数前自动生成的磁盘快照", en: "Project rollback points: disk snapshots taken automatically before AI edits" },
  },
  {
    tag: { zh: "研发开发舱", en: "Dev Cockpit" },
    title: { zh: "面向视觉工程师：从任务描述到可运行流程", en: "For vision engineers: from task description to a runnable flow" },
    desc: {
      zh: "研发开发舱面向算法与应用工程师，开放全部算子和流程编排能力。除了拖拽搭建，还可以用结构化的任务定义让平台自动编排算子拓扑，并用内置的标杆工程快速起步。",
      en: "The Dev Cockpit is built for algorithm and application engineers, with the full tool library and flow editor unlocked. Beyond drag-and-drop, a structured task definition can be compiled into a tool topology automatically, and reference projects give you a fast start.",
    },
    points: [
      { zh: "工业语义任务定义自动编译为算子流程", en: "Industrial task definitions are compiled into tool flows" },
      { zh: "标杆工程一键装配：螺丝规格尺寸测量、表面瑕疵质检、芯片对位", en: "One-click reference projects: screw dimension measurement, surface defect inspection, chip alignment" },
      { zh: "强类型参数校验，参数的物理边界是硬约束", en: "Strongly typed parameter schema; physical limits are hard constraints" },
      { zh: "AI 生成的流程先过静态检查与沙盘测试，再允许运行", en: "AI-generated flows pass static checks and sandbox tests before they may run" },
    ],
    image: `${IMG}/dev-cockpit.jpg`,
    alt: { zh: "研发开发舱：左侧算子库分类，右侧 Copilot 开发模式", en: "Dev Cockpit: tool library on the left, Copilot in development mode on the right" },
  },
  {
    tag: { zh: "现场运维舱", en: "O&M Cockpit" },
    title: { zh: "面向产线：敢交给操作员用的视觉软件", en: "For the line: vision software you can hand to operators" },
    desc: {
      zh: "现场运维舱面向产线操机员与现场质检人员，默认只读，把可操作范围收窄到日常真正需要的几件事，降低对资深 FAE 驻场调参的依赖。",
      en: "The O&M Cockpit is designed for line operators and on-site quality staff. It is read-only by default and narrows the surface to the few things daily operation really needs — reducing the dependence on senior FAEs for on-site tuning.",
    },
    points: [
      { zh: "流程编辑器只读锁定，防止现场误改算子拓扑与基准坐标系", en: "Flow editor locked read-only, protecting tool topology and reference frames" },
      { zh: "现场防误报微调：仅允许在安全区间内调整公差带与光照补偿", en: "False-call fine-tuning: tolerance bands and lighting compensation, inside a safe zone only" },
      { zh: "工件配方一键切换，支持多规格快速换型", en: "One-click recipe switching for fast changeover between part variants" },
      { zh: "异常时一键回滚到上一版良品配置", en: "One-click rollback to the last known-good configuration" },
      { zh: "产线漂移与节拍监控：持续跟踪单帧耗时与测量值的均值、极差走势", en: "Drift and cycle-time monitoring: tracks per-frame time and the mean/range trend of measurements" },
    ],
    image: `${IMG}/om-cockpit.jpg`,
    alt: { zh: "现场运维舱：流程只读，提供配方切换、防误报调参、回滚与漂移监测", en: "O&M Cockpit: read-only flow with recipe switching, false-call tuning, rollback and drift monitoring" },
  },
  {
    tag: { zh: "自研算法", en: "In-house algorithms" },
    title: { zh: "PatSky 几何定位与 Dn 算法库", en: "PatSky geometric locating and the Dn algorithm library" },
    desc: {
      zh: "平台内置自研 Dn 算法库。其中 PatSky 是基于轮廓几何特征的定位工具，支持图像示教、特征示教、复合训练与 CAD 导入，并针对常见工况提供一键预设；定位结果可直接作为后续卡尺、抓线、测量工具的基准。",
      en: "The platform ships with the in-house Dn algorithm library. PatSky is a contour-based geometric locating tool that supports image training, feature training, composite training and CAD import, with one-click presets for common conditions. Its result serves as the fixture for downstream caliper, line-fit and measurement tools.",
    },
    points: [
      { zh: "工业场景一键预设：旋转金属件、包装标签、芯片引脚", en: "Scenario presets: rotating metal parts, package labels, chip leads" },
      { zh: "支持训练掩码与搜索掩码，排除干扰区域", en: "Training and search masks to exclude disturbing regions" },
      { zh: "定位、测量、标定、检测、识别共 25 个自研工具", en: "25 in-house tools across locating, measurement, calibration, inspection and recognition" },
      { zh: "同时集成 VisionPro 与 Halcon 引擎，已有算法资产可继续使用", en: "VisionPro and Halcon engines are integrated, so existing algorithm assets keep working" },
    ],
    image: `${IMG}/patsky-tool.jpg`,
    alt: { zh: "PatSky 定位工具对话框：场景预设、模板示教与运行参数", en: "PatSky locating tool dialog: scenario presets, pattern training and run parameters" },
  },
];

/** 算子库总览（与软件内算子树的分类一致） */
const TOOLBOX: Array<{ icon: typeof Cpu; name: Bi; items: Bi }> = [
  {
    icon: Target,
    name: { zh: "定位与引导", en: "Locating & guidance" },
    items: {
      zh: "PatSky 定位、灰度匹配、对位引导、九点标定、畸变标定",
      en: "PatSky locating, grayscale matching, alignment guidance, 9-point calibration, distortion calibration",
    },
  },
  {
    icon: Ruler,
    name: { zh: "测量", en: "Measurement" },
    items: {
      zh: "卡尺测量、抓线、抓圆、抓椭圆、几何测量、3D 测量、3D 形体拟合",
      en: "Caliper, line / circle / ellipse fitting, geometric measurement, 3D measurement, 3D shape fitting",
    },
  },
  {
    icon: ShieldCheck,
    name: { zh: "检测与识别", en: "Inspection & recognition" },
    items: {
      zh: "瑕疵检测、Blob 检测、差异模型、图像相减、颜色检测、读码、字符识别",
      en: "Defect detection, blob analysis, difference model, image subtraction, color inspection, code reading, OCR",
    },
  },
  {
    icon: Layers,
    name: { zh: "图像处理", en: "Image processing" },
    items: {
      zh: "预处理、图像拼接、图像裁切、对比度、清晰度评估",
      en: "Pre-processing, stitching, cropping, contrast, sharpness evaluation",
    },
  },
  {
    icon: Cpu,
    name: { zh: "AI 与第三方引擎", en: "AI & third-party engines" },
    items: {
      zh: "AI 推理引擎、VisionPro 引擎、Halcon 引擎、C# 用户脚本",
      en: "AI inference engine, VisionPro engine, Halcon engine, C# user scripts",
    },
  },
  {
    icon: Zap,
    name: { zh: "图像源与光源", en: "Acquisition & lighting" },
    items: {
      zh: "相机取图、本地读图、光源控制",
      en: "Camera acquisition, image file input, light controller",
    },
  },
  {
    icon: Settings2,
    name: { zh: "运动控制与通讯", en: "Motion & communication" },
    items: {
      zh: "点位运动、插补、回原点、IO 与气缸控制、PLC 读写、设备信号",
      en: "Point-to-point motion, interpolation, homing, IO and cylinder control, PLC read/write, device signals",
    },
  },
  {
    icon: Workflow,
    name: { zh: "流程、数据与系统对接", en: "Flow, data & integration" },
    items: {
      zh: "流程控制与逻辑分析、变量工具、图像与 CSV/数据库存取、SPC 分析与预警、MES 接口",
      en: "Flow control and logic, variables, image and CSV/database storage, SPC analysis and alerts, MES interface",
    },
  },
];

/** 应用场景 */
const SCENARIOS: Array<{ title: Bi; desc: Bi; tools: Bi }> = [
  {
    title: { zh: "紧固件与精密零件尺寸测量", en: "Fastener and precision-part measurement" },
    desc: {
      zh: "以螺丝为例：PatSky 先定位工件姿态，抓线与卡尺工具跟随定位结果测量螺纹段长度、头部尺寸与垂直度，再由几何测量给出 OK/NG。工件任意角度摆放都无需重新框选。",
      en: "Taking a screw as an example: PatSky locates the part, line-fit and caliper tools follow the fixture to measure thread length, head size and perpendicularity, and geometric measurement gives the OK/NG verdict — at any part orientation, without re-drawing regions.",
    },
    tools: { zh: "PatSky 定位 · 抓线 · 卡尺测量 · 几何测量", en: "PatSky · Line fit · Caliper · Geometric measurement" },
  },
  {
    title: { zh: "外观与表面瑕疵质检", en: "Cosmetic and surface defect inspection" },
    desc: {
      zh: "预处理后由瑕疵检测与 Blob 检测找出划伤、缺料、脏污等异常，输出缺陷数量、面积与对比度；复杂缺陷可接入 AI 推理引擎。尺寸与外观可以在同一条流程里一次完成。",
      en: "After pre-processing, defect detection and blob analysis find scratches, missing material and contamination and report count, area and contrast. Complex defects can be routed to the AI inference engine. Dimension and cosmetic checks run in one flow.",
    },
    tools: { zh: "预处理 · 瑕疵检测 · Blob 检测 · AI 推理引擎", en: "Pre-processing · Defect detection · Blob · AI inference" },
  },
  {
    title: { zh: "芯片与电子元件对位", en: "Chip and electronic component alignment" },
    desc: {
      zh: "针对芯片引脚等细密重复特征提供专用预设；配合九点标定与畸变标定把像素坐标换算到机械坐标，由对位引导工具输出补偿量，驱动轴或机械手完成贴装。",
      en: "A dedicated preset handles fine, repetitive features such as chip leads. 9-point and distortion calibration convert pixel to machine coordinates, and the alignment guidance tool outputs the offset that drives axes or robots for placement.",
    },
    tools: { zh: "PatSky 定位 · 九点标定 · 畸变标定 · 对位引导", en: "PatSky · 9-point calibration · Distortion calibration · Alignment guidance" },
  },
  {
    title: { zh: "包装、标签与追溯", en: "Packaging, labels and traceability" },
    desc: {
      zh: "定位包装或标签位置后，读码与字符识别完成批号、日期、条码的核对，颜色检测与差异模型用于判断错贴、漏贴与印刷差异；结果写入数据库或上传 MES。",
      en: "After locating the package or label, code reading and OCR verify lot numbers, dates and barcodes, while color inspection and the difference model catch wrong, missing or misprinted labels. Results go to a database or to MES.",
    },
    tools: { zh: "PatSky 定位 · 读码 · 字符识别 · 颜色检测 · MES 接口", en: "PatSky · Code reading · OCR · Color inspection · MES interface" },
  },
  {
    title: { zh: "多品种产线的快速换线", en: "Fast changeover on high-mix lines" },
    desc: {
      zh: "每个规格保存为一份配方，现场在运维舱里一键切换；新规格上线前，用批量沙箱回放在历史图片上验证参数，减少上线后的反复调试。",
      en: "Each variant is stored as a recipe and switched with one click in the O&M Cockpit. Before a new variant goes live, batch sandbox replay validates the parameters on historical images, cutting post-launch rework.",
    },
    tools: { zh: "配方切换 · 批量沙箱回放 · 回滚点", en: "Recipe switching · Batch sandbox replay · Rollback points" },
  },
  {
    title: { zh: "已上线产线的日常防误报", en: "Day-to-day false-call control on running lines" },
    desc: {
      zh: "漂移监测持续跟踪测量值与节拍走势，提前发现光照或来料变化；需要调整时，在安全区间内微调并留下回滚点，出问题随时还原。",
      en: "Drift monitoring keeps tracking measurement and cycle-time trends to catch lighting or material changes early. When adjustment is needed, tuning stays inside the safe zone and leaves a rollback point so anything can be undone.",
    },
    tools: { zh: "产线漂移监测 · 现场防误报调参 · SPC 预警", en: "Drift monitoring · False-call tuning · SPC alerts" },
  },
  {
    title: { zh: "视觉 + 运动一体的检测与组装设备", en: "Integrated vision-and-motion equipment" },
    desc: {
      zh: "同一平台内完成取图、光源、视觉算法、轴与 IO 控制、PLC 通讯和人机界面，适合检测机、量测机与自动组装设备的整机软件开发，批量复制部署时配置方式保持一致。",
      en: "Acquisition, lighting, vision algorithms, axis and IO control, PLC communication and HMI live in one platform — suited to inspection, measurement and automated assembly machines, with a consistent configuration model for volume deployment.",
    },
    tools: { zh: "相机取图 · 光源控制 · 运动控制 · PLC 通讯 · HMI", en: "Acquisition · Lighting · Motion control · PLC · HMI" },
  },
  {
    title: { zh: "3D 测量与形体拟合", en: "3D measurement and shape fitting" },
    desc: {
      zh: "内置 3D 测量与 3D 形体拟合工具，用于三维尺寸类检测项目，可与 2D 工具在同一流程中组合使用。",
      en: "Built-in 3D measurement and 3D shape-fitting tools for three-dimensional dimension checks, combinable with 2D tools in the same flow.",
    },
    tools: { zh: "3D 测量 · 3D 形体拟合", en: "3D measurement · 3D shape fitting" },
  },
];

// ───────────────────────── 页面组件 ─────────────────────────

export function VisionOneDetail({ lang, locale }: { lang: Lang; locale: string }) {
  // 小工具函数：按当前语言取文案
  const t = (b: Bi) => b[lang];

  return (
    <div className="bg-white">
      {/* 首屏：标题 + 导语 + 主界面截图 */}
      <section className="bg-navy-500 text-white pt-16 pb-20">
        <div className="container-page">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {lang === "zh" ? "返回产品列表" : "Back to products"}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag-accent bg-brand-500/20 text-brand-400 border border-brand-500/30">
              {lang === "zh" ? "软件" : "Software"}
            </span>
            <span className="tag-accent bg-white/10 text-white border border-white/20">AI-Native</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {lang === "zh" ? "VisionOne AI-Native 视觉开发平台" : "VisionOne AI-Native Vision Development Platform"}
          </h1>
          <p className="mt-5 text-gray-300 text-lg max-w-3xl leading-relaxed">
            {lang === "zh"
              ? "VisionOne 是鼎纳自研的机器视觉与运动控制一体化开发平台。在低代码图形化流程的基础上，平台内置 Vision Copilot：用自然语言搭流程、改参数、跑验证，每一次 AI 改动都有回滚点可查可退。它要解决的是工业视觉最费人的两件事——新产品的快速换线，和已上线产线的日常防误报调参。"
              : "VisionOne is Dinnar's in-house platform for machine vision and motion control. On top of a low-code graphical flow editor it adds Vision Copilot: build flows, change parameters and run validation in natural language, with a rollback point behind every AI edit. It targets the two most labor-intensive jobs in industrial vision — fast changeover for new products, and day-to-day false-call tuning on running lines."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/about`} className="btn-primary">
              {lang === "zh" ? "预约演示" : "Request a demo"}
            </Link>
            <a href="#features" className="btn-white">
              {lang === "zh" ? "查看功能详情" : "See the features"}
            </a>
          </div>
          <a
            href={`${IMG}/copilot-nl-tuning.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 block rounded-xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={`${IMG}/copilot-nl-tuning.jpg`}
              alt={lang === "zh" ? "VisionOne 主界面与 Vision Copilot" : "VisionOne main window with Vision Copilot"}
              className="w-full h-auto"
            />
          </a>
          <p className="mt-3 text-sm text-gray-400">
            {lang === "zh"
              ? "VisionOne 主界面：左侧流程，中间图像与结果叠加，右侧 Vision Copilot。"
              : "VisionOne main window: flow on the left, image with result overlay in the center, Vision Copilot on the right."}
          </p>
        </div>
      </section>

      {/* 为什么是 AI-Native：四张要点卡片 */}
      <section className="container-page section-pad">
        <div className="section-title">
          <h2>{lang === "zh" ? "AI-Native，不是在旧软件上加一个聊天框" : "AI-Native — not a chat box bolted onto old software"}</h2>
          <div className="accent-line" />
          <p>
            {lang === "zh"
              ? "AI 能读懂工程、能动手改、改了能验证、错了能退回——这四件事同时成立，才敢把它用在产线上。"
              : "The AI can read the project, change it, verify the change and undo it. Only when all four hold is it safe to use on a production line."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((p) => (
            <div key={p.title.en} className="card-white p-6 flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-500">{t(p.title)}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t(p.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 功能详述：图文左右交替 */}
      <section id="features" className="bg-gray-50 section-pad scroll-mt-20">
        <div className="container-page">
          <div className="section-title">
            <h2>{lang === "zh" ? "核心功能" : "Key features"}</h2>
            <div className="accent-line" />
          </div>
          <div className="space-y-20">
            {FEATURES.map((f, i) => (
              <div key={f.title.en} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* 偶数行图在右、奇数行图在左，形成交替版式 */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="tag-accent">{t(f.tag)}</span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold text-navy-500 leading-snug">{t(f.title)}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{t(f.desc)}</p>
                  <ul className="mt-6 space-y-3">
                    {f.points.map((pt) => (
                      <li key={pt.en} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span>{t(pt)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={f.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block card-white overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <img src={f.image} alt={t(f.alt)} className="w-full h-auto" loading="lazy" />
                  <p className="px-4 py-3 text-xs text-gray-500 border-t border-gray-100">{t(f.alt)}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 算子库总览 */}
      <section className="container-page section-pad">
        <div className="section-title">
          <h2>{lang === "zh" ? "算子库与平台能力" : "Tool library and platform capabilities"}</h2>
          <div className="accent-line" />
          <p>
            {lang === "zh"
              ? "视觉、运动、通讯、数据与系统对接在同一套图形化流程里完成，拖拽即可组合。"
              : "Vision, motion, communication, data and system integration share one graphical flow — combine them by drag and drop."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLBOX.map((g) => (
            <div key={g.name.en} className="card-white p-5">
              <g.icon className="w-6 h-6 text-brand-600" />
              <h3 className="mt-3 text-base font-semibold text-navy-500">{t(g.name)}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t(g.items)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 应用场景 */}
      <section className="bg-gray-50 section-pad">
        <div className="container-page">
          <div className="section-title">
            <h2>{lang === "zh" ? "应用场景" : "Application scenarios"}</h2>
            <div className="accent-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCENARIOS.map((s, i) => (
              <div key={s.title.en} className="card-white p-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-500">{t(s.title)}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t(s.desc)}</p>
                <p className="mt-4 text-xs text-brand-700 bg-brand-50 rounded-md px-3 py-2">{t(s.tools)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部行动号召，与通用产品页保持一致 */}
      <section className="bg-brand-500 text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {lang === "zh" ? "想看 VisionOne 在您的工件上怎么跑？" : "Want to see VisionOne on your own parts?"}
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            {lang === "zh"
              ? "把样件图片发给我们，工程团队会用 VisionOne 搭一条流程给您演示。"
              : "Send us sample images and our engineering team will build a flow in VisionOne for a live demo."}
          </p>
          <Link href={`/${locale}/about`} className="btn-white mt-6 inline-flex">
            {lang === "zh" ? "联系我们" : "Contact us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
