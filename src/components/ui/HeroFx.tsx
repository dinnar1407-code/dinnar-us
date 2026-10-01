/**
 * HeroFx
 * 叠在首屏火星工厂图片上的动态特效层：激光扫描、检测相机闪光、合格标记、
 * 传送带灯带流动、搬运车和机器人指示灯、星星闪烁、园区道路灯。
 *
 * 为什么用 SVG：viewBox 就是图片的像素坐标系（2560×1429），
 * preserveAspectRatio="xMaxYMid slice" 的裁切方式和图片的
 * object-cover + object-right 完全一致，所以不管窗口多大，特效都对得上图里的位置。
 * 动画全部用 SVG 自带的 <animate>，不需要 JS，也不会触发 React 重渲染。
 */

// 图片坐标系里的几个关键点（单位：图片像素）
const EMITTER = { x: 2292, y: 775 }; // 龙门架右上角的激光发射口
const PRODUCT = { x: 2096, y: 951 }; // 被检测的电路板中心

// 天空里额外闪烁的星星：[x, y, 半径, 周期秒, 起始延迟秒]
const STARS: [number, number, number, number, number][] = [
  [118, 62, 2.2, 3.1, 0.0],
  [342, 148, 1.8, 2.6, 0.7],
  [505, 44, 2.4, 3.8, 1.4],
  [688, 121, 1.7, 2.9, 0.3],
  [842, 70, 2.1, 3.4, 1.9],
  [233, 215, 1.6, 2.7, 1.1],
  [612, 198, 1.9, 3.6, 2.3],
  [968, 150, 1.8, 3.0, 0.9],
  [432, 96, 1.5, 2.4, 1.6],
  [771, 28, 2.0, 3.3, 0.5],
];

// 搬运车车头灯条：[中心 x, 中心 y, 横向半径, 延迟秒]（越远的车越小）
const CART_LIGHTS: [number, number, number, number][] = [
  [1446, 946, 60, 0.0],
  [1234, 762, 30, 0.6],
  [1172, 690, 21, 1.2],
  [1108, 633, 15, 1.8],
];

// 园区道路两侧的地灯，按顺序依次亮起，像跑道灯：[x, y]
const ROAD_LIGHTS: [number, number][] = [
  [92, 732],
  [243, 682],
  [243, 639],
  [461, 630],
  [548, 554],
];

export function HeroFx() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 2560 1429"
      preserveAspectRatio="xMaxYMid slice"
      className="hero-fx pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      style={{ mixBlendMode: "screen" }}
    >
      {/* 用户在系统里开了「减少动态效果」时，整层特效不显示，只留静态图 */}
      <style>{`@media (prefers-reduced-motion: reduce) { .hero-fx { display: none !important; } }`}</style>

      <defs>
        {/* 柔光：让线条和光点带一圈光晕 */}
        <filter id="fx-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="fx-soft" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        {/* 激光束：靠近发射口亮，越远越淡 */}
        <linearGradient id="fx-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b8fff0" stopOpacity="0.95" />
          <stop offset="1" stopColor="#19e6a0" stopOpacity="0.05" />
        </linearGradient>
        {/* 相机闪光：中心白、边缘透明 */}
        <radialGradient id="fx-flash">
          <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="0.35" stopColor="#c8fff4" stopOpacity="0.55" />
          <stop offset="1" stopColor="#19e6a0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── 星星闪烁 ── */}
      {STARS.map(([x, y, r, dur, delay], i) => (
        <circle key={`s${i}`} cx={x} cy={y} r={r} fill="#ffffff" opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* ── 园区道路地灯：依次点亮 ── */}
      {ROAD_LIGHTS.map(([x, y], i) => (
        <circle key={`r${i}`} cx={x} cy={y} r="5" fill="#dff6ff" filter="url(#fx-glow)" opacity="0">
          <animate attributeName="opacity" values="0;1;0;0" keyTimes="0;0.12;0.3;1" dur="3s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* ── 远处那段传送带的边灯：细一些、慢一些 ── */}
      <line x1="1093" y1="550" x2="1787" y2="894" stroke="#5ef2ff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="16 74" opacity="0.7" filter="url(#fx-glow)">
        {/* dashoffset 从 0 走到 -90（正好一个虚线周期），看起来光点沿带子往镜头方向流动 */}
        <animate attributeName="stroke-dashoffset" values="0;-90" dur="1.5s" repeatCount="indefinite" />
      </line>

      {/* ── 近处传送带的青色灯带：流动光点 ── */}
      <line x1="1860" y1="947" x2="2560" y2="1303" stroke="#9ffcff" strokeWidth="5" strokeLinecap="round" strokeDasharray="46 134" opacity="0.9" filter="url(#fx-glow)">
        <animate attributeName="stroke-dashoffset" values="0;-180" dur="1.3s" repeatCount="indefinite" />
      </line>

      {/* ── 搬运车车头灯条：呼吸 ── */}
      {CART_LIGHTS.map(([x, y, rx, delay], i) => (
        <ellipse key={`c${i}`} cx={x} cy={y} rx={rx} ry={Math.max(3, rx * 0.13)} fill="#eafcff" filter="url(#fx-glow)" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.85;0.15" dur="2.4s" begin={`${delay}s`} repeatCount="indefinite" />
        </ellipse>
      ))}

      {/* ── 人形机器人面罩反光 + 机柜上的绿色状态灯 ── */}
      <circle cx="1547" cy="708" r="5" fill="#bff8ff" filter="url(#fx-glow)" opacity="0">
        <animate attributeName="opacity" values="0;0.9;0.2;0.9;0" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="2391" cy="714" r="5" fill="#bff8ff" filter="url(#fx-glow)" opacity="0">
        <animate attributeName="opacity" values="0;0.9;0.2;0.9;0" dur="4s" begin="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="2355" cy="939" r="7" fill="#35ff9a" filter="url(#fx-glow)" opacity="0.2">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.1s" repeatCount="indefinite" />
      </circle>

      {/* ── 视觉检测工位 ── */}
      {/* 激光扫描束：一条从发射口伸出的细长三角形，绕发射口来回摆动扫过电路板。
          外层 g 负责把原点挪到发射口，里面的三角形只需要绕原点旋转 */}
      <g transform={`translate(${EMITTER.x} ${EMITTER.y})`}>
        <polygon points="0,-3 340,-16 340,16 0,3" fill="url(#fx-beam)" filter="url(#fx-glow)" opacity="0.85">
          <animateTransform attributeName="transform" type="rotate" values="108;154;108" dur="2.8s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* 相机闪光：每 3.2 秒连闪两下，像工业相机的频闪补光 */}
      <circle cx={PRODUCT.x} cy={PRODUCT.y} r="250" fill="url(#fx-flash)" opacity="0">
        <animate attributeName="opacity" values="0;0;0.95;0.1;0.7;0;0" keyTimes="0;0.55;0.58;0.62;0.65;0.72;1" dur="3.2s" repeatCount="indefinite" />
      </circle>
      {/* 闪光打在地面上的一小片余晖 */}
      <ellipse cx={PRODUCT.x} cy={PRODUCT.y + 70} rx="210" ry="46" fill="#7dffd8" filter="url(#fx-soft)" opacity="0">
        <animate attributeName="opacity" values="0;0;0.5;0;0" keyTimes="0;0.55;0.6;0.8;1" dur="3.2s" repeatCount="indefinite" />
      </ellipse>

      {/* 检测框：闪光后四个角标亮起，表示「已定位」 */}
      <g fill="none" stroke="#b8fff0" strokeWidth="4" strokeLinecap="round" filter="url(#fx-glow)" opacity="0">
        <path d="M1954 912 v-26 h34 M2245 912 v-26 h-34 M1954 1003 v26 h34 M2245 1003 v26 h-34" />
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.6;0.66;0.9;0.97;1" dur="3.2s" repeatCount="indefinite" />
      </g>

      {/* 合格标记：绿色圆圈加对勾，闪光之后弹出，下一轮开始前消失 */}
      <g opacity="0" filter="url(#fx-glow)">
        <circle cx="2296" cy="1040" r="22" fill="none" stroke="#35ff9a" strokeWidth="4" />
        <path d="M2285 1040 l8 9 l15 -18" fill="none" stroke="#35ff9a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.68;0.73;0.92;0.98;1" dur="3.2s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}
