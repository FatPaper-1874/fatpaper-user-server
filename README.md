# fatpaper-user-server

FatPaper 用户服务器

#### 目录结构

```
├─📁 public-------------------- # 静态资源，在没有用COS对象存储时上传的文件会存在这里
│ ├─📁 avatars
│ └─📁 logs
├─📁 src
│ ├─📁 interfaces-------------- # 接口
│ │ └─📄 res.ts
│ ├─📁 routers----------------- # 路由
│ │ └─📄 user.ts
│ ├─📁 static------------------ # 配置数据桥梁
│ │ └─📄 index.ts
│ └─📁 utils
│   ├─📁 db-------------------- # 数据库相关
│   │ ├─📁 api----------------- # api
│   │ ├─📁 entities------------ # 数据库实例
│   │ └─📄 dbConnecter.ts------ # 数据库链接工具
│   ├─📁 logger---------------- # 打印工具
│   ├─📁 redis----------------- # redis
│   ├─📁 token----------------- # token工具
│   ├─📄 file-uploader.ts------ # 文件上传工具函数
│   ├─📄 index.ts-------------- # 工具函数集
│   ├─📄 role-validation.ts---- # 角色验证中间件
│   └─📄 rsakey.ts------------- # 加密工具
├─📄 app.ts-------------------- # 主文件
└─📄 global.config.ts---------- # 配置数据桥梁
```

#### 运行

`yarn dev`
