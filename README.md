<h1>pure-admin-micro</h1>

# 正在开发中...

**中文** | [English](./README.en-US.md)

## 简介

`pure-admin-micro` 官方微前端集成了 [MicroApp](https://micro-zoe.github.io/micro-app/)、[qiankun](https://qiankun.umijs.org/zh) 、[wujie](https://wujie-micro.github.io/doc/) 三种微前端框架，用户可自行选择一种微前端框架开发

## 用法

### 安装依赖

```sh
pnpm install
```

### 运行项目

`MicroApp` 版本

```sh
pnpm micro-app:dev
```

`qiankun` 版本

```sh
pnpm qiankun:dev
```

`wujie` 版本

```sh
pnpm wujie:dev
```

### 删除所有 `node-node_modules` 文件

`linux`、`mac`

```sh
pnpm linux:clean:node_modules
```

`windows`

```sh
pnpm win:clean:node_modules
```

## 主要目录结构

```
├── packages                          # 应用程序
│   ├── main-apps                     # 主应用、基座应用
│   │   ├── pure-admin-micro-app      # MicroApp 微前端框架版本
│   │   ├── pure-admin-qiankun        # qiankun 微前端框架版本
│   │   ├── pure-admin-wujie          # wujie 微前端框架版本
│   ├── sub-apps                      # 子应用、微应用
│   │   ├── micro-app                 # MicroApp 微前端框架版本
│   │   │   ├── react-vite            # react-vite 应用
│   │   │   ├── vue2                  # vue2 应用
│   │   │   ├── vue3                  # vue3 应用
│   │   │   ├── vue3-vite             # vue3-vite 应用
│   │   ├── qiankun                   # qiankun 微前端框架版本
│   │   │   ├── react-vite            # react-vite 应用
│   │   │   ├── vue2                  # vue2 应用
│   │   │   ├── vue3                  # vue3 应用
│   │   │   ├── vue3-vite             # vue3-vite 应用
│   │   ├── wujie                     # wujie 微前端框架版本
│   │   │   ├── react-vite            # react-vite 应用
│   │   │   ├── vue2                  # vue2 应用
│   │   │   ├── vue3                  # vue3 应用
│   │   │   ├── vue3-vite             # vue3-vite 应用
```

主应用、基座应用使用 [pure-admin-thin](https://github.com/xiaoxian521/pure-admin-thin) 开发，子应用、微应用提供 `react-vite`、`vue2`、`vue3`、`vue3-vite` 版本演示
