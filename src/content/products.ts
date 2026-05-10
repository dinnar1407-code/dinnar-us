// AUTO-GENERATED from content-scraped/parsed/all.json with desensitization applied.
// Customer names replaced per Phase 3 rules.

export type Locale = 'en' | 'zh';

export type Product = {
  slug: string;
  category: 'inspection' | 'measurement' | 'function' | 'assembly' | 'intelligence' | 'software';
  industries: string[];
  title: { en: string; zh: string };
  summary: { en: string; zh: string };
  headings: { en: string[]; zh: string[] };
  image: string;
};

export const products: Product[] = [
  {
    "slug": "p-511",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Laptop Appearance Inspection Device",
      "zh": "笔记本电脑外观检测设备"
    },
    "summary": {
      "en": "Laptop Appearance Inspection Device: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "笔记本电脑外观检测设备 针对电子行业笔记本表面质量人工检测情况,开发了表面缺陷无损检测软件.首先电笔记本外壳表面经过治具机构粗定位 ,通过电机A、B相编码反馈硬触发8K线扫相机及高频光源控制器实现分时频闪,获取到的整图按照客户指示点位图分割多个等大小图片，采用json+http协议，请求算法服务器获取单图推理结果，最后经过样本级结果查询获取产品表面缺陷种类 。 准确率高、漏杀、过杀率低于5% 多种类型外观缺陷智能检测 兼容性强：一台机器可检测多种产品， 可以兼容不同尺寸产品 采用可快速更换弹夹： 上料时间短，并可实现快速切换产品 运行稳定：每日运行检测5"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system",
        "Application cases"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统",
        "应用案例"
      ]
    },
    "image": "/images/screenshots/industry_semiconductor.png"
  },
  {
    "slug": "p-527",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Online PCB Visual Inspection Machine",
      "zh": "PCB在线外观检测机"
    },
    "summary": {
      "en": "Online PCB Visual Inspection Machine: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "PCB在线外观检测机 PCB板是电子产品中不可替代的精密元器件。其质量直接影响产品的性能。因此，在PCB生产过程中，质量检验是非常重要的。PCB外观检测是质量检测的重要组成部分，对检测的准确性、效率和速度有很高的要求。印刷电路板的内部工艺复杂。除了芯板结构层压、钻孔和布线外，还需要考虑预埋件、表面精加工、清洁和蚀刻。传统的PCB检测方法采用人工肉眼，容易漏检，检测速度慢，时间长。它对环境条件有严格的要求，不适合危险的工作环境。 植入深度学习算法 传送速度可调节: 0 - 10 m/min 检测缺陷类型大小： 最小尺寸为0.5*0.5mm （视觉精度0.1"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696819291.png"
  },
  {
    "slug": "p-589",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Mini",
      "zh": "Mini"
    },
    "summary": {
      "en": "Mini: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "Mini-LED胶水缺陷检测设备 平板电脑组件缺陷检测设备 背光板尺寸和轮廓检测 Phone Board 2D缺陷AOI 手机摄像头色差全尺寸检测一体机 手机摄像头功能尺寸检测线体 手表后盖尺寸检测设备 单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/"
    },
    "headings": {
      "en": [
        "Mini-LED胶水缺陷检测设备",
        "检测类型",
        "最小精度",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera"
      ],
      "zh": [
        "Mini-LED胶水缺陷检测设备",
        "检测类型",
        "最小精度",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机"
      ]
    },
    "image": "/images/inspection_html_images_1696819980.png"
  },
  {
    "slug": "p-602",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Tablet Component Defect Inspection Equipment",
      "zh": "平板电脑组件缺陷检测设备"
    },
    "summary": {
      "en": "Tablet Component Defect Inspection Equipment: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "平板电脑组件缺陷检测设备 背光板尺寸和轮廓检测 Phone Board 2D缺陷AOI 手机摄像头色差全尺寸检测一体机 手机摄像头功能尺寸检测线体 手表后盖尺寸检测设备 单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺"
    },
    "headings": {
      "en": [
        "检测类型",
        "最小精度",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "检测类型",
        "最小精度",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696819996.png"
  },
  {
    "slug": "p-631",
    "category": "inspection",
    "industries": [
      "display"
    ],
    "title": {
      "en": "Backlight Panel Size and Contour Detection",
      "zh": "背光板尺寸和轮廓检测"
    },
    "summary": {
      "en": "Backlight Panel Size and Contour Detection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "背光板尺寸和轮廓检测 Phone Board 2D缺陷AOI 手机摄像头色差全尺寸检测一体机 手机摄像头功能尺寸检测线体 手表后盖尺寸检测设备 单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696820013.png"
  },
  {
    "slug": "p-644",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Phone Board 2D Defect AOI",
      "zh": "Phone Board 2D缺陷AOI"
    },
    "summary": {
      "en": "Phone Board 2D Defect AOI: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "Phone Board 2D缺陷AOI 手机摄像头色差全尺寸检测一体机 手机摄像头功能尺寸检测线体 手表后盖尺寸检测设备 单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体"
    },
    "headings": {
      "en": [
        "检测类型",
        "最小精度",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "检测类型",
        "最小精度",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696820029.png"
  },
  {
    "slug": "p-657",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Mobile Camera Color & Full-Size Inspection Machine",
      "zh": "手机摄像头色差全尺寸检测一体机"
    },
    "summary": {
      "en": "Mobile Camera Color & Full-Size Inspection Machine: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手机摄像头色差全尺寸检测一体机 手机摄像头功能尺寸检测线体 手表后盖尺寸检测设备 单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头"
    },
    "headings": {
      "en": [
        "检测类型",
        "检出能力",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "检测类型",
        "检出能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696820044.png"
  },
  {
    "slug": "p-671",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Mobile Camera Functional Size Inspection Line",
      "zh": "手机摄像头功能尺寸检测线体"
    },
    "summary": {
      "en": "Mobile Camera Functional Size Inspection Line: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手机摄像头功能尺寸检测线体 手表后盖尺寸检测设备 单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖"
    },
    "headings": {
      "en": [
        "检测类型",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Inspection system",
        "Application cases",
        "咨询 获取资源"
      ],
      "zh": [
        "检测类型",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "检测系统",
        "应用案例",
        "咨询 获取资源"
      ]
    },
    "image": "/images/inspection_html_images_1696820071.png"
  },
  {
    "slug": "p-741",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Watch Back Cover Size Detection Equipment",
      "zh": "手表后盖尺寸检测设备"
    },
    "summary": {
      "en": "Watch Back Cover Size Detection Equipment: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手表后盖尺寸检测设备 单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头"
    },
    "headings": {
      "en": [
        "尺寸类型",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "尺寸类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696820888.png"
  },
  {
    "slug": "p-754",
    "category": "inspection",
    "industries": [
      "semiconductor"
    ],
    "title": {
      "en": "Monocrystalline Wafer Cutting Blade Defect Detection",
      "zh": "单晶元切割片缺陷检测"
    },
    "summary": {
      "en": "Monocrystalline Wafer Cutting Blade Defect Detection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "单晶元切割片缺陷检测 手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696821026.png"
  },
  {
    "slug": "p-778",
    "category": "inspection",
    "industries": [
      "electron",
      "energy"
    ],
    "title": {
      "en": "Automatic Defect Detection for Watch Microphones",
      "zh": "手表麦克风缺陷自动检测"
    },
    "summary": {
      "en": "Automatic Defect Detection for Watch Microphones: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手表麦克风缺陷自动检测 手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696821037.png"
  },
  {
    "slug": "p-790",
    "category": "inspection",
    "industries": [
      "electron",
      "energy"
    ],
    "title": {
      "en": "Automatic Color Detection for Phone Keys",
      "zh": "手机按键颜色自动检测"
    },
    "summary": {
      "en": "Automatic Color Detection for Phone Keys: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手机按键颜色自动检测 电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696821384.png"
  },
  {
    "slug": "p-803",
    "category": "inspection",
    "industries": [
      "energy"
    ],
    "title": {
      "en": "Composite Battery Film Defect Detection",
      "zh": "电池复合薄膜缺陷检测"
    },
    "summary": {
      "en": "Composite Battery Film Defect Detection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "电池复合薄膜缺陷检测 医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻"
    },
    "headings": {
      "en": [
        "检测类型",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "检测类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696821394.png"
  },
  {
    "slug": "p-843",
    "category": "inspection",
    "industries": [
      "other"
    ],
    "title": {
      "en": "Medical Stapler Cartridge Inspection",
      "zh": "医用吻合器仓订检测"
    },
    "summary": {
      "en": "Medical Stapler Cartridge Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "医用吻合器仓订检测 医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696821470.png"
  },
  {
    "slug": "p-844",
    "category": "inspection",
    "industries": [
      "other"
    ],
    "title": {
      "en": "Medical Saline Bottle Inspection",
      "zh": "医用盐水瓶检测"
    },
    "summary": {
      "en": "Medical Saline Bottle Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "医用盐水瓶检测 万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696821868.png"
  },
  {
    "slug": "p-870",
    "category": "inspection",
    "industries": [
      "other"
    ],
    "title": {
      "en": "Universal Cross-Shaft Appearance Inspection",
      "zh": "万向十字轴外观缺陷检测"
    },
    "summary": {
      "en": "Universal Cross-Shaft Appearance Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "万向十字轴外观缺陷检测 汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696821909.png"
  },
  {
    "slug": "p-909",
    "category": "inspection",
    "industries": [
      "display",
      "energy",
      "other"
    ],
    "title": {
      "en": "Windshield + PVD Film High-Precision Alignment & Bonding",
      "zh": "汽车前挡风玻璃和PVD膜高精度对位贴合"
    },
    "summary": {
      "en": "Windshield + PVD Film High-Precision Alignment & Bonding: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "汽车前挡风玻璃和PVD膜高精度对位贴合 H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1696822116.png"
  },
  {
    "slug": "p-933",
    "category": "inspection",
    "industries": [
      "energy"
    ],
    "title": {
      "en": "H1H2 Lithium Cell Inspection Equipment",
      "zh": "H1H2专用锂电池检测设备"
    },
    "summary": {
      "en": "H1H2 Lithium Cell Inspection Equipment: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "H1H2专用锂电池检测设备 液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision"
    },
    "headings": {
      "en": [
        "Defect types",
        "Inspection speed",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system",
        "Application cases",
        "咨询 获取资源"
      ],
      "zh": [
        "缺陷类型",
        "检测速度",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统",
        "应用案例",
        "咨询 获取资源"
      ]
    },
    "image": "/images/inspection_html_images_1696822126.png"
  },
  {
    "slug": "p-953",
    "category": "inspection",
    "industries": [
      "display"
    ],
    "title": {
      "en": "LCD Display Metrology",
      "zh": "液晶显示屏幕量测"
    },
    "summary": {
      "en": "LCD Display Metrology: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "液晶显示屏幕量测 FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1697611055.png"
  },
  {
    "slug": "p-965",
    "category": "inspection",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "FPC Flexible Circuit Defect Detection",
      "zh": "FPC柔性电路板缺陷检测"
    },
    "summary": {
      "en": "FPC Flexible Circuit Defect Detection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "FPC柔性电路板缺陷检测 平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/inspection_html_images_1698799648.png"
  },
  {
    "slug": "p-1098",
    "category": "inspection",
    "industries": [
      "electron",
      "other"
    ],
    "title": {
      "en": "Tablet Appearance Defect Universal Platform",
      "zh": "平板电脑外观缺陷通用平台"
    },
    "summary": {
      "en": "Tablet Appearance Defect Universal Platform: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "平板电脑外观缺陷通用平台 视觉量测设备 双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯"
    },
    "headings": {
      "en": [
        "检测类型",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Inspection system",
        "Application cases"
      ],
      "zh": [
        "检测类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "检测系统",
        "应用案例"
      ]
    },
    "image": "/images/inspection_html_images_1718956855.png"
  },
  {
    "slug": "p-490",
    "category": "function",
    "industries": [
      "display",
      "electron",
      "other"
    ],
    "title": {
      "en": "Watch Back-Cover Glass Light-Transmittance Inspection",
      "zh": "手表后盖玻璃透光性检测一体机"
    },
    "summary": {
      "en": "Watch Back-Cover Glass Light-Transmittance Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 手表后盖玻璃透光性检测一体机 该产品是一种专门用于3C电子行业手表后盖功能检测的设备。 它通过高效的检测程序实现对手表后盖玻璃透光性的检"
    },
    "headings": {
      "en": [
        "检测类型",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Inspection system",
        "检测类型"
      ],
      "zh": [
        "检测类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "检测系统",
        "检测类型"
      ]
    },
    "image": "/images/function_html_images_1696820138.png"
  },
  {
    "slug": "p-683",
    "category": "function",
    "industries": [
      "display",
      "electron",
      "other"
    ],
    "title": {
      "en": "Watch Back-Cover Glass Light-Up Inspection",
      "zh": "手表后盖玻璃点亮检测设备"
    },
    "summary": {
      "en": "Watch Back-Cover Glass Light-Up Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 手表后盖玻璃点亮检测设备 针对电子行业手表后盖功能检测，通过检测程序实现光束透过性检测。 采用Macmini测试并上传PDCA 上下层料仓机构，实现上下层 单机台4产"
    },
    "headings": {
      "en": [
        "检测类型",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Inspection system",
        "Application cases"
      ],
      "zh": [
        "检测类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "检测系统",
        "应用案例"
      ]
    },
    "image": "/images/function_html_images_1696820825.png"
  },
  {
    "slug": "p-695",
    "category": "function",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Camera Module Airtightness Functional Tester",
      "zh": "手机摄像头模组气密功能检测一体机"
    },
    "summary": {
      "en": "Camera Module Airtightness Functional Tester: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 手机摄像头模组气密功能检测一体机 针对电子行业手机摄像头模组防水性测试，通过料仓上料，机械手抓取12pcs上料分三次放料，每次放料4pcs品，运动过程变距实现同时上料，气密性检测，机械手下料O"
    },
    "headings": {
      "en": [
        "检测类型",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Inspection system",
        "Application cases",
        "咨询 获取资源"
      ],
      "zh": [
        "检测类型",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "检测系统",
        "应用案例",
        "咨询 获取资源"
      ]
    },
    "image": "/images/function_html_images_1696820843.png"
  },
  {
    "slug": "p-706",
    "category": "function",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Watch Back-Cover Optical-Property Tester",
      "zh": "手表后盖光学特性测试设备"
    },
    "summary": {
      "en": "Watch Back-Cover Optical-Property Tester: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 手表后盖光学特性测试设备 针对电子行业手表后盖功能检测，通过相机拍照对比940nm米光束下的灰度值对比，来判定产品的透过率检测 采用Macmini测试并上传PDCA 下料机两分BIN机构 双通道8个产品同时多功能检测 速度快，"
    },
    "headings": {
      "en": [
        "检测类型",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Inspection system",
        "Application cases"
      ],
      "zh": [
        "检测类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "检测系统",
        "应用案例"
      ]
    },
    "image": "/images/function_html_images_1696821429.png"
  },
  {
    "slug": "p-718",
    "category": "function",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Mobile Camera Module Airtightness Inspection",
      "zh": "手机摄像头模组气密性检测设备"
    },
    "summary": {
      "en": "Mobile Camera Module Airtightness Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 手机摄像头模组气密性检测设备 针对电子行业手机摄像头模组防水性测试，通过料仓上料，机械手抓取4pcs产品，运动过程变距实现同时上料，气密性检测，机械手下料OK/NG分bin； 采用气密性泄漏仪， 同时对24pcs产品进行气密性检测 双料仓上料 单机台2"
    },
    "headings": {
      "en": [
        "检测类型",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Inspection system",
        "Application cases",
        "咨询 获取资源"
      ],
      "zh": [
        "检测类型",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "检测系统",
        "应用案例",
        "咨询 获取资源"
      ]
    },
    "image": "/images/function_html_images_1697605782.png"
  },
  {
    "slug": "p-910",
    "category": "function",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Force & Travel Test Equipment",
      "zh": "力与行程测试设备"
    },
    "summary": {
      "en": "Force & Travel Test Equipment: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 力与行程测试设备 此设备主要用于生产线或实验室车锁开锁力和开锁行程的测试，包含两项测试功能，车锁内开的力和行程的关系，车锁外开的力和行程的关系。程序采用C# VS2019编写，可设置添加不同型号的产品，测试数据可记录，方便查询。界面上完美展示力与行程的关系。 拉力可调节： 通过比例"
    },
    "headings": {
      "en": [
        "数据采集",
        "力度调节",
        "行程调节",
        "Suitable products",
        "Inspection method",
        "传感器",
        "Inspection system",
        "Application cases"
      ],
      "zh": [
        "数据采集",
        "力度调节",
        "行程调节",
        "适用产品",
        "检测方式",
        "传感器",
        "检测系统",
        "应用案例"
      ]
    },
    "image": "/images/function_html_images_1697610175.png"
  },
  {
    "slug": "p-549",
    "category": "intelligence",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Roller Smart Assembly Line",
      "zh": "滚轮智能组装线"
    },
    "summary": {
      "en": "Roller Smart Assembly Line: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 滚轮智能组装线 目前在鼠标生产企业，滚轮组装环节一直采用人工组装的方式，产品质量依赖人工。针对这种情况，研发了滚轮全自动智能组装线，实现了滚轮组装的全自动生产，保证产品质量稳定性的同时大幅缓解了企业用工问题。 1、实现所有零件自动上料，自动组装转子、弱磁定子、皮圈、支架、泡棉等； 2、实现自动点胶、点油、自动测试"
    },
    "headings": {
      "en": [
        "组装零件",
        "功能项",
        "测试功能",
        "设备占地",
        "Suitable products",
        "Inspection method",
        "CT",
        "Application cases"
      ],
      "zh": [
        "组装零件",
        "功能项",
        "测试功能",
        "设备占地",
        "适用产品",
        "检测方式",
        "CT",
        "应用案例"
      ]
    },
    "image": "/images/intelligence_html_images_1698800132.png"
  },
  {
    "slug": "p-817",
    "category": "intelligence",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Robotic Loading & Unloading",
      "zh": "机器人上下料"
    },
    "summary": {
      "en": "Robotic Loading & Unloading: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 机器人上下料 针对上下料工作频繁、劳动强度大的特性。公司开发了此系统，并在传统的机器人上下料系统中最新增加了视觉控制单元，用于自动识别工件位置，大大降低了机器人上下料时对工件位置的精度要求，从而降低了客户的硬件成本。该视觉控制单元由视觉传感器、控制器等组成 高精度：相机定位，抓取精准。重复抓取精度0.2mm 产品保护：减轻作业强"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/intelligence_html_images_1699497687.png"
  },
  {
    "slug": "p-830",
    "category": "intelligence",
    "industries": [
      "semiconductor"
    ],
    "title": {
      "en": "Motor Housing Drill & Tap Machine",
      "zh": "电机壳钻攻一体机"
    },
    "summary": {
      "en": "Motor Housing Drill & Tap Machine: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 电机壳钻攻一体机 广泛用于3C行业、汽车及零部件、工程机械、小型模具加工、轨道交通、航空航天、医疗器械等行业中的小型板零件、盘型零件、壳体类加工。 模块化：模块化结构，互换性强，拆装方便 兼容性高：可兼容4种产品生产，CT短（30S以内） 高精度:一次定位，多角度孔位钻攻，精度高 单机作业模式:转盘结构，多工位一体加工，业内首创单机作业模式"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最小检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最小检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/intelligence_html_images_1699497802.png"
  },
  {
    "slug": "p-845",
    "category": "intelligence",
    "industries": [
      "semiconductor"
    ],
    "title": {
      "en": "Micro-Sensor Assembly Line",
      "zh": "微型传感器组装线"
    },
    "summary": {
      "en": "Micro-Sensor Assembly Line: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 微型传感器组装线 与传统传感器相比，微型传感器具有许多新特性，它们能够弥补传统传感器的不足，具有广泛的应用前景，越来越受到重视，以新的工作机制和物化效应，使用标准工艺兼容的材料，通过MEMS 加工技术制备的新一代传感器件，具有小型化、集成化的特点，可以极大地提高传感器性能。在信号传输方面可减少干扰和噪音，提高信噪比，降低误差，提高灵敏度。 现有的微型传感器的组"
    },
    "headings": {
      "en": [
        "线体工艺",
        "最小组装精度",
        "高产量",
        "最小成品尺寸",
        "Suitable products",
        "上下料方式",
        "软件系统",
        "Application cases"
      ],
      "zh": [
        "线体工艺",
        "最小组装精度",
        "高产量",
        "最小成品尺寸",
        "适用产品",
        "上下料方式",
        "软件系统",
        "应用案例"
      ]
    },
    "image": "/images/intelligence_html_images_1699498181.png"
  },
  {
    "slug": "p-859",
    "category": "intelligence",
    "industries": [
      "energy"
    ],
    "title": {
      "en": "Automotive Door-Lock Assembly Line",
      "zh": "汽车门锁组装线"
    },
    "summary": {
      "en": "Automotive Door-Lock Assembly Line: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 汽车门锁组装线 应用于汽车门锁组装生产，该组装线加入了MES系统，并把大量旋铆、喷油、打螺丝、激光打码工位加入检测功能并上传MES系统，使每个产品都可追溯到各个的加工工艺和尺寸参数。该产线为柔性产线可拆分组合，兼容不同型号产品，满足不同生产工艺 。 相比传统手工作业线规避了大批量报废的风险把控了各个质量环节，降低不良率。 兼容性强：柔性线体可拆分组合， 兼容不同型号产品，满足不"
    },
    "headings": {
      "en": [
        "线体工艺",
        "检测精度",
        "高产量",
        "兼容性",
        "Suitable products",
        "软件系统",
        "Application cases",
        "咨询 获取资源"
      ],
      "zh": [
        "线体工艺",
        "检测精度",
        "高产量",
        "兼容性",
        "适用产品",
        "软件系统",
        "应用案例",
        "咨询 获取资源"
      ]
    },
    "image": "/images/intelligence_html_images_1699498244.png"
  },
  {
    "slug": "p-923",
    "category": "intelligence",
    "industries": [
      "energy"
    ],
    "title": {
      "en": "Prismatic Battery Appearance Inspection",
      "zh": "方形电池外观检测"
    },
    "summary": {
      "en": "Prismatic Battery Appearance Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 方形电池外观检测 外观检测设备检测结果更加准确可靠，ccd视觉检测。 主要检测目标：电池类产品异物、划痕、压痕、极耳不良、污染、腐蚀、凹点、极耳烧伤、喷码不良、字符模糊等外观缺陷检测。 设备采用高像素镜头，检测精度可仪达到μ级。 兼容性强：设备载具可更换载具， 可兼容不同尺寸产品 。 机构精密：可整体翻转180°检测 高精度：6面检测，精度+/-0.005 单站别：设备主要功能为测试锂电池全部表面缺陷 设备"
    },
    "headings": {
      "en": [
        "设备工艺",
        "最小组装精度",
        "机构",
        "Suitable products",
        "软件系统",
        "Application cases",
        "咨询 获取资源"
      ],
      "zh": [
        "设备工艺",
        "最小组装精度",
        "机构",
        "适用产品",
        "软件系统",
        "应用案例",
        "咨询 获取资源"
      ]
    },
    "image": "/images/intelligence_html_images_1698800132.png"
  },
  {
    "slug": "p-945",
    "category": "intelligence",
    "industries": [
      "energy"
    ],
    "title": {
      "en": "New-Energy Battery Cell Appearance Inspection",
      "zh": "新能电池Cell外观检测"
    },
    "summary": {
      "en": "New-Energy Battery Cell Appearance Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 新能电池Cell外观检测 外观检测设备检测结果更加准确可靠，ccd视觉检测。 主要检测目标：电池类产品异物、划痕、压痕、极耳不良、污染、腐蚀、凹点、极耳烧伤、喷码不良、字符模糊等外观缺陷检测。 兼容性强：设备载具可更换载具， 可兼容不同尺寸产品 高精度：6面检测， 精度+/-0.005 单站别：设备主要功能为 测试锂电池全部表面缺陷 设备工艺 CCD尺寸检测， CCD外观缺陷检测等 最小组装精度 ±0.02 mm 适用产品"
    },
    "headings": {
      "en": [
        "设备工艺",
        "最小组装精度",
        "Suitable products",
        "软件系统",
        "Application cases",
        "咨询 获取资源"
      ],
      "zh": [
        "设备工艺",
        "最小组装精度",
        "适用产品",
        "软件系统",
        "应用案例",
        "咨询 获取资源"
      ]
    },
    "image": "/images/intelligence_html_images_1699497687.png"
  },
  {
    "slug": "p-562",
    "category": "measurement",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Dual-Cavity Flatness Inspection",
      "zh": "双穴平面度检测设备"
    },
    "summary": {
      "en": "Dual-Cavity Flatness Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "双穴平面度检测设备 玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 双穴平面度检测设备 智能视"
    },
    "headings": {
      "en": [
        "检测类型",
        "最小精度",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "检测类型",
        "最小精度",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/detection-img04.png"
  },
  {
    "slug": "p-575",
    "category": "measurement",
    "industries": [
      "display",
      "other"
    ],
    "title": {
      "en": "Glass Flatness Inspection Machine",
      "zh": "玻璃平面度检测一体机"
    },
    "summary": {
      "en": "Glass Flatness Inspection Machine: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "玻璃平面度检测一体机 滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 玻璃平面度检测一体机 智能视觉尺寸测量系统，是"
    },
    "headings": {
      "en": [
        "检测类型",
        "最小精度",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "检测类型",
        "最小精度",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/screenshots/industry_electron.png"
  },
  {
    "slug": "p-616",
    "category": "measurement",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Laptop BC/TC/DH Dimension Measurement Machine",
      "zh": "滚笔电BC/TC/DH尺寸检测机"
    },
    "summary": {
      "en": "Laptop BC/TC/DH Dimension Measurement Machine: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "滚笔电BC/TC/DH尺寸检测机 手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 滚笔电BC/TC/DH尺寸检测机 针对电子行业笔记本电脑TC的尺寸管"
    },
    "headings": {
      "en": [
        "测量尺寸",
        "视觉像素分辨能力",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "测量尺寸",
        "视觉像素分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/screenshots/industry_energy.png"
  },
  {
    "slug": "p-766",
    "category": "measurement",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Mobile Phone Appearance & Full-Size Inspection",
      "zh": "手机外观全尺寸检测"
    },
    "summary": {
      "en": "Mobile Phone Appearance & Full-Size Inspection: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "手机外观全尺寸检测 功能检测设备 手表后盖玻璃透光性检测一体机 手表后盖玻璃点亮检测设备 手机摄像头模组气密功能检测一体机 手表后盖光学特性测试设备 手机摄像头模组气密性检测设备 力与行程测试设备 智能组装设备 滚轮智能组装线 机器人上下料 电机壳钻攻一体机 微型传感器组装线 汽车门锁组装线 智能检测设备 方形电池外观检测 新能电池Cell外观检测 软件 Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En 手机外观全尺寸检测 手表后盖功能检测机，是一台软硬一体化UMP，全自动智能制造设备，及标准化机器视觉系"
    },
    "headings": {
      "en": [
        "Defect types",
        "Minimum defect resolution",
        "Inspection speed",
        "最大检测尺寸",
        "Suitable products",
        "Inspection method",
        "Camera",
        "Inspection system"
      ],
      "zh": [
        "缺陷类型",
        "最小缺陷分辨能力",
        "检测速度",
        "最大检测尺寸",
        "适用产品",
        "检测方式",
        "相机",
        "检测系统"
      ]
    },
    "image": "/images/screenshots/product_watch_backcover.png"
  },
  {
    "slug": "p-1072",
    "category": "software",
    "industries": [
      "electron"
    ],
    "title": {
      "en": "Vision One Visual Development Platform",
      "zh": "Vision One 视觉开发平台"
    },
    "summary": {
      "en": "Vision One Visual Development Platform: a Dinnar production-line module that combines vision, motion, and on-device AI to inspect, measure, or assemble components at line speed with audit-grade traceability.",
      "zh": "Vision One 视觉开发平台 探索更多 公司介绍 招聘信息 企业文化 新闻资讯 中 / En Vision One 视觉开发平台 Vision One 视觉开发平台是一款专注于机器视觉和运动控制的低代码图形化集成开发环境。集成了VisionPro算法和Halcon算子，通讯接口，人机交互，多种采集硬件以及几十种常用模块等。 标准化 统一界面风格,调试方式,配置方式。后期批量复制部署迅速,维护简单 平台化 集成多种工业硬件，包含核心算法库模块，HMI 界面设计等多种模块，将配置好的功能快速组建项目 扩展性 支持模块扩展和二次开发。嵌入到用户软件。支持"
    },
    "headings": {
      "en": [
        "咨询 获取资源"
      ],
      "zh": [
        "咨询 获取资源"
      ]
    },
    "image": "/images/screenshots/product_aci_s1000.png"
  }
];

export const productsBySlug = new Map(products.map((p) => [p.slug, p]));

export function productsByCategory(cat: Product['category']) {
  return products.filter((p) => p.category === cat);
}

export function productsByIndustry(industry: string) {
  return products.filter((p) => p.industries.includes(industry));
}