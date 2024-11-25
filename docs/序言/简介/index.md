---
title: "PikiwiDB(Pika) 简介"
sidebar_position: 0
---

![PikiwiDB(Pika)-Logo](PikiwiDB(Pika)-Logo.png)
PikiwiDB 是由开放原子开源基金会托管及运营的一款键值数据库，最初由 360 基础架构小组研发设计。PikiwiDB 解决了传统键值数据库在大规模数据场景下恢复时间较长、性能表现不佳的问题，最早被命名为 Pika，用于替换 360 内部系统所使用的 Redis，支撑 360 自身业务所需要的缓存需求，后面向行业开放源代码，并交付，为业内海量数据场景的高可用存储需求提供支持。

## PikiwiDB(Pika) 数据库的特点

所有的软件都有自身所对接的需求与特点，把握住这些特点有助于增进你对于行业需求的理解，并增进你对于软件的应用能力。

PikiwiDB(Pika) 的特点可以概括如下。

### 对 Redis 的良好兼容性

PikiwiDB(Pika) 最早被用于替换 360 内部的 Redis 服务，而数据应用程序的数据独立性需求使得我们在迁移 Redis 数据至 PikiwiDB(Pika) 时，必须尽可能少地干扰到数据应用本身。

因此 PikiwiDB(Pika) 自设计伊始，便在对既有的 Redis 应用兼容性上下了功夫，采用了兼容 Redis 的数据传输协议，进而使得绝大多数数据应用程序，可以顺利在不加修改的情况下，由 Redis 迁移到 PikiwiDB(Pika) 上面来。

### 海量数据存储友好

传统的键值数据库在小规模数据应用上表现良好，可以顺利地满足高性能数据存储的需求，但是我们在实践中发现，伴随着业务量的不断扩张，支撑这些传统键值数据库所需要的硬件成本正在不断上升，给企业带来了昂贵的负担，因此 PikiwiDB(Pika) 在设计时在海量数据存储优化上做了文章，使得在同样的数据规模条件下，PikiwiDB(Pika) 相较于传统的键值数据库能够占用更少的服务器资源，并提供性能相当的数据存储服务。

### 快速故障恢复

除了硬件成本的高昂外，传统的键值数据库因为并非面向于海量数据规模而设计，同时因为其数据存储于内存之中，因此在出现故障的场景下，数据往往会全部丢失，数据应用程序整体性能将会在对应时间点极速下滑，PikiwiDB(Pika) 弥补了传统键值数据库在这一方面的不足，其思路在于将存储于内存中的数据同步于磁盘，并以日志方式进行存储。这样在出现故障的时候，依托磁盘上的数据与日志中的记录，即可实现快速的故障恢复，而对于数据应用程序而言，因为大部分的存储数据依旧顺利保存着，故性能方面并不会下降很多。

### 社区驱动发展

目前 PikiwiDB(Pika) 已经逐渐由 360 的内部项目，过渡为由开放原子开源基金会托管及运营的社区开源项目，我们将进一步优化项目文档水平，降低外部参与 PikiwiDB(Pika) 项目的门槛，尽力而为地做好海量数据规模下的高可用键值数据库。

## 发展历程

+ 2016年 Pika 项目发布于 360 Github 仓库
+ 2021年 进入开放原子开源基金会孵化
+ 2023年 Pika 项目更名为 PikiwiDB
