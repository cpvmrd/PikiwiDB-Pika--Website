"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[2941],{2219:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>a});var e=t(4848),l=t(8453);const o={title:"What's new in Pika v3.5.0",slug:"Pika-3.5.0",authors:[{name:"\u4e8e\u96e8",title:"dubbogo\u793a\u571f\u533a"}],hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/Pika-3.5.0",source:"@site/blog/2023-08-25-Pika-3.5.0.md",title:"What's new in Pika v3.5.0",description:"\u65f6\u9694\u4e24\u5e74\uff0cPika \u793e\u533a\u6b63\u5f0f\u53d1\u5e03\u7ecf\u7531\u793e\u533a 50 \u591a\u4eba\u53c2\u4e0e\u5f00\u53d1\u5e76\u5728 360 \u751f\u4ea7\u73af\u5883\u9a8c\u8bc1\u53ef\u7528\u7684 v3.5.0 \u7248\u672c\uff0c\u65b0\u7248\u672c\u5728\u63d0\u5347\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e5f\u652f\u6301\u4e86 Codis \u96c6\u7fa4\u90e8\u7f72\uff0cBlobDB KV \u5206\u79bb\uff0c\u589e\u52a0 Exporter \u7b49\u65b0\u7279\u6027\u3002",date:"2023-08-25T00:00:00.000Z",tags:[],readingTime:9.825,hasTruncateMarker:!1,authors:[{name:"\u4e8e\u96e8",title:"dubbogo\u793a\u571f\u533a"}],frontMatter:{title:"What's new in Pika v3.5.0",slug:"Pika-3.5.0",authors:[{name:"\u4e8e\u96e8",title:"dubbogo\u793a\u571f\u533a"}],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"What's new in Pika v3.5.1",permalink:"/blog/Pika-3.5.1"},nextItem:{title:"Pika Blackwidow \u5f15\u64ce\u6570\u636e\u5b58\u50a8\u683c\u5f0f",permalink:"/blog/pika-blackwidow"}},h={authorsImageUrls:[void 0]},a=[{value:"1 \u53bb\u9664 Rsync",id:"1-\u53bb\u9664-rsync",level:2},{value:"2 \u517c\u5bb9\u66f4\u591a Redis \u547d\u4ee4",id:"2-\u517c\u5bb9\u66f4\u591a-redis-\u547d\u4ee4",level:2},{value:"3 RocksDB \u7248\u672c\u5347\u7ea7\u548c\u5206\u7ea7\u538b\u7f29",id:"3-rocksdb-\u7248\u672c\u5347\u7ea7\u548c\u5206\u7ea7\u538b\u7f29",level:2},{value:"4 \u652f\u6301 BlobDB",id:"4-\u652f\u6301-blobdb",level:2},{value:"5 \u57fa\u4e8e Codis \u7684\u96c6\u7fa4\u6a21\u5f0f",id:"5-\u57fa\u4e8e-codis-\u7684\u96c6\u7fa4\u6a21\u5f0f",level:2},{value:"6 \u53ef\u89c2\u6d4b\u6027",id:"6-\u53ef\u89c2\u6d4b\u6027",level:2},{value:"7 \u5bb9\u5668\u5316\u90e8\u7f72",id:"7-\u5bb9\u5668\u5316\u90e8\u7f72",level:2},{value:"8 \u8de8\u5e73\u53f0\u7f16\u8bd1",id:"8-\u8de8\u5e73\u53f0\u7f16\u8bd1",level:2},{value:"9 \u591a\u5e73\u53f0\u96c6\u6210\u6d4b\u8bd5\u53ca\u5355\u5143\u6d4b\u8bd5",id:"9-\u591a\u5e73\u53f0\u96c6\u6210\u6d4b\u8bd5\u53ca\u5355\u5143\u6d4b\u8bd5",level:2},{value:"10 Others",id:"10-others",level:2}];function d(n){const i={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.p,{children:"\u65f6\u9694\u4e24\u5e74\uff0cPika \u793e\u533a\u6b63\u5f0f\u53d1\u5e03\u7ecf\u7531\u793e\u533a 50 \u591a\u4eba\u53c2\u4e0e\u5f00\u53d1\u5e76\u5728 360 \u751f\u4ea7\u73af\u5883\u9a8c\u8bc1\u53ef\u7528\u7684 v3.5.0 \u7248\u672c\uff0c\u65b0\u7248\u672c\u5728\u63d0\u5347\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e5f\u652f\u6301\u4e86 Codis \u96c6\u7fa4\u90e8\u7f72\uff0cBlobDB KV \u5206\u79bb\uff0c\u589e\u52a0 Exporter \u7b49\u65b0\u7279\u6027\u3002"}),"\n",(0,e.jsx)(i.p,{children:"\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8be5\u7248\u672c\u5f15\u5165\u7684\u91cd\u8981\u65b0\u7279\u6027\u3002"}),"\n",(0,e.jsx)(i.h2,{id:"1-\u53bb\u9664-rsync",children:"1 \u53bb\u9664 Rsync"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e4b\u524d\uff0cPika \u4f7f\u7528 Rsync \u5de5\u5177\u8fdb\u884c\u5f15\u64ce\u4e2d\u5b58\u91cf\u6570\u636e\u7684\u540c\u6b65\uff0cPika \u8fdb\u7a0b\u542f\u52a8\u65f6\u521b\u5efa Rsync \u5b50\u8fdb\u7a0b\u3002\u8fd9\u79cd\u540c\u6b65\u65b9\u5f0f\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u5305\u62ecPika \u8fdb\u7a0b crash \u540e\u91cd\u65b0\u62c9\u8d77\u65e0\u6cd5\u6b63\u5e38\u540c\u6b65\u4ee5\u53ca\u540c\u6b65\u8fc7\u7a0b\u4e2d Rsync \u8fdb\u7a0b\u65e0\u6545\u9000\u51fa\u7b49\u3002\u5728\u4eca\u5e74\u53d1\u5e03\u7684 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5728\u5168\u91cf\u540c\u6b65\u65b9\u6848\u65b9\u9762\u8fdb\u884c\u4e86\u91cd\u8981\u7684\u6539\u8fdb\uff0c\u6452\u5f03\u4e86\u4ee5\u5f80\u4f7f\u7528\u7684 Rsync\uff0c\u5b9e\u73b0\u4e86\u5168\u65b0\u7684\u6570\u636e\u540c\u6b65\u65b9\u6848\uff0c\u652f\u6301\u4e86\u65ad\u70b9\u7eed\u4f20\uff0c\u52a8\u6001\u8c03\u8282\u4f20\u8f93\u9650\u901f\u7b49\u7279\u6027\uff0c\u4ee5\u786e\u4fdd\u540c\u6b65\u8fc7\u7a0b\u66f4\u52a0\u7a33\u5b9a\u3001\u53ef\u63a7\u3002\u8fd9\u4e9b\u6539\u8fdb\u4e0d\u4ec5\u589e\u5f3a\u4e86\u540c\u6b65\u7684\u53ef\u9760\u6027\uff0c\u8fd8\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u4f7f\u7528\u4f53\u9a8c\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:["\u53bb\u9664 Rsync \u8fdb\u7a0b\uff0c\u4f7f\u7528\u81ea\u7814\u5168\u91cf\u540c\u6b65\u65b9\u5f0f\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1805",children:"https://github.com/OpenAtomFoundation/pika/pull/1805"})]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:["\u5b9e\u73b0\u65ad\u70b9\u7eed\u4f20\uff0c\u4f20\u8f93\u9650\u901f\u529f\u80fd\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1926",children:"https://github.com/OpenAtomFoundation/pika/pull/1926"})]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:["Pika \u4e3b\u4ece\u540c\u6b65\u65f6\uff0c\u8fdb\u884c master run_id \u7684\u68c0\u9a8c\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1805",children:"https://github.com/OpenAtomFoundation/pika/pull/1805"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"2-\u517c\u5bb9\u66f4\u591a-redis-\u547d\u4ee4",children:"2 \u517c\u5bb9\u66f4\u591a Redis \u547d\u4ee4"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8fc8\u51fa\u4e86\u66f4\u5927\u7684\u4e00\u6b65\uff0c\u63d0\u5347\u4e86\u5bf9 Redis \u547d\u4ee4\u7684\u517c\u5bb9\u6027\uff0c\u5bf9 Redis \u547d\u4ee4\u63d0\u4f9b\u4e86\u66f4\u5e7f\u6cdb\u7684\u652f\u6301\u3002\u8fd9\u4e2a\u7248\u672c\u7684\u6539\u8fdb\u4f7f\u5f97 Pika \u5728\u4e0e Redis \u751f\u6001\u7cfb\u7edf\u7684\u96c6\u6210\u4e2d\u8868\u73b0\u66f4\u52a0\u51fa\u8272\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\u548c\u66f4\u5e7f\u9614\u7684\u53ef\u80fd\u6027\u3002\u6211\u4eec\u5bf9\u547d\u4ee4\u652f\u6301\u7684\u6269\u5c55\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u7075\u6d3b\u6027\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u573a\u666f\u4e0b\u7684\u9700\u6c42\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u652f\u6301 UNLINK \u547d\u4ee4\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1273",children:"https://github.com/OpenAtomFoundation/pika/pull/1273"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u652f\u6301 INFO COMMANDSTATS \u547d\u4ee4\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1660",children:"https://github.com/OpenAtomFoundation/pika/pull/1660"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u652f\u6301 HELLO\u3001SETNAME \u547d\u4ee4\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1245",children:"https://github.com/OpenAtomFoundation/pika/pull/1245"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u652f\u6301 BLPOP\u3001BRPOP \u547d\u4ee4\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1548",children:"https://github.com/OpenAtomFoundation/pika/pull/1548"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e Pika \u539f\u521b DISKRECOVERY \u547d\u4ee4\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1843",children:"https://github.com/OpenAtomFoundation/pika/pull/1843"})]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"3-rocksdb-\u7248\u672c\u5347\u7ea7\u548c\u5206\u7ea7\u538b\u7f29",children:"3 RocksDB \u7248\u672c\u5347\u7ea7\u548c\u5206\u7ea7\u538b\u7f29"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u4e00\u9879\u91cd\u8981\u7684\u5347\u7ea7\uff0c\u5c06 RocksDB \u5f15\u64ce\u5347\u7ea7\u81f3 v8.1.1 \u7248\u672c\uff0c\u5e76\u5b9e\u73b0\u4e86\u5206\u7ea7\u538b\u7f29\u529f\u80fd\u7684\u6574\u5408\u3002\u8fd9\u4e00\u5347\u7ea7\u4e0d\u4ec5\u662f\u6280\u672f\u7684\u98de\u8dc3\uff0c\u4e5f\u662f\u6211\u4eec\u5bf9\u7cfb\u7edf\u6027\u80fd\u548c\u4f18\u5316\u7684\u6301\u7eed\u5173\u6ce8\u7684\u4f53\u73b0\u3002\u901a\u8fc7\u8fd9\u9879\u5347\u7ea7\uff0c\u6211\u4eec\u4e3a Pika \u589e\u52a0\u4e86\u66f4\u9ad8\u7ea7\u522b\u7684\u6570\u636e\u7ba1\u7406\u80fd\u529b\uff0c\u540c\u65f6\u4e5f\u8ba9\u7cfb\u7edf\u66f4\u597d\u5730\u9002\u5e94\u4e0d\u540c\u7684\u538b\u7f29\u9700\u6c42\uff0c\u4e3a\u7528\u6237\u7684\u6570\u636e\u5b58\u50a8\u548c\u68c0\u7d22\u63d0\u4f9b\u4e86\u66f4\u5927\u7684\u7075\u6d3b\u6027\u548c\u6548\u7387\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u5347\u7ea7 RocksDB \u7248\u672c\u5230 v8.1.1\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1396",children:"https://github.com/OpenAtomFoundation/pika/pull/1396"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u5b9e\u73b0 RocksDB \u5206\u7ea7\u538b\u7f29\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1365",children:"https://github.com/OpenAtomFoundation/pika/pull/1365"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e RocksDB \u7f13\u5b58\u914d\u7f6e\u9879 num-shard-bits \u80fd\u591f\u4ece\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bfb\u53d6\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1189",children:"https://github.com/OpenAtomFoundation/pika/pull/1189"})]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"4-\u652f\u6301-blobdb",children:"4 \u652f\u6301 BlobDB"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u5f15\u4eba\u77a9\u76ee\u7684\u521b\u65b0--\u5bf9 BlobDB \u548c KV \u5b58\u50a8\u5c42\u8fdb\u884c\u4e86\u5206\u79bb\uff0c\u4e3a\u6211\u4eec\u7684\u7cfb\u7edf\u6ce8\u5165\u4e86\u65b0\u7684\u6d3b\u529b\u3002\u8fd9\u4e2a\u7248\u672c\u7684\u5347\u7ea7\u4f7f\u5f97 Pika \u5728\u6570\u636e\u5b58\u50a8\u65b9\u9762\u66f4\u52a0\u7075\u6d3b\u548c\u9ad8\u6548\u3002\u6211\u4eec\u901a\u8fc7\u652f\u6301 BlobDB KV \u5206\u79bb\uff0c\u63d0\u4f9b\u4e86\u66f4\u4f18\u5316\u7684\u6570\u636e\u5b58\u50a8\u7ed3\u6784\uff0c\u4e3a\u7528\u6237\u7684\u6570\u636e\u7ba1\u7406\u548c\u67e5\u8be2\u64cd\u4f5c\u5e26\u6765\u4e86\u66f4\u6df1\u5c42\u6b21\u7684\u4f18\u52bf\u3002\u8fd9\u4e00\u91cd\u8981\u6539\u8fdb\u5c06\u5728\u66f4\u591a\u5e94\u7528\u573a\u666f\u4e0b\u5c55\u73b0\u51fa\u5176\u5f3a\u5927\u7684\u6f5c\u529b\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u652f\u6301 BlobDB KV \u5206\u79bb\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1456",children:"https://github.com/OpenAtomFoundation/pika/pull/1456"})]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"5-\u57fa\u4e8e-codis-\u7684\u96c6\u7fa4\u6a21\u5f0f",children:"5 \u57fa\u4e8e Codis \u7684\u96c6\u7fa4\u6a21\u5f0f"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u79ef\u6781\u5f15\u5165\u4e86 Codis \u96c6\u7fa4\u6a21\u5f0f\uff0c\u6b64\u5916\uff0c\u6211\u4eec\u4e0d\u4ec5\u4ec5\u5c06 Codis \u96c6\u7fa4\u6a21\u5f0f\u878d\u5165\u4e86\u7cfb\u7edf\u4e2d\uff0c\u8fd8\u4e3a\u5176\u63d0\u4f9b\u4e86\u8fc1\u79fb slot \u7684\u547d\u4ee4\u652f\u6301\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86\u66f4\u52a0\u667a\u80fd\u5316\u7684\u96c6\u7fa4\u7ba1\u7406\u3002\u8fd9\u4e00\u91cd\u5927\u53d8\u9769\u4e0d\u4ec5\u6269\u5c55\u4e86 Pika \u5728\u5927\u89c4\u6a21\u6570\u636e\u5b58\u50a8\u573a\u666f\u4e2d\u7684\u5e94\u7528\u8303\u56f4\uff0c\u8fd8\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u53ef\u6269\u5c55\u6027\u548c\u9ad8\u53ef\u7528\u6027\u3002\u901a\u8fc7\u5f15\u5165 Codis \u96c6\u7fa4\u6a21\u5f0f\uff0c\u6211\u4eec\u5bf9\u7528\u6237\u7684\u6570\u636e\u5904\u7406\u548c\u7ba1\u7406\u63d0\u4f9b\u4e86\u66f4\u4f18\u5316\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u5f15\u5165 Codis \u5230 Pika"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1279",children:"https://github.com/OpenAtomFoundation/pika/pull/1279"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u5f15\u5165 Codis \u7684 CI"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1311",children:"https://github.com/OpenAtomFoundation/pika/pull/1311"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u652f\u6301 Codis \u8fc1\u79fb slot \u547d\u4ee4"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1632",children:"https://github.com/OpenAtomFoundation/pika/pull/1632"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u65b0\u589e\u662f\u5426\u5728 reload \u7684 slotmigrate \u72b6\u6001"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1700",children:"https://github.com/OpenAtomFoundation/pika/pull/1700"})}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"6-\u53ef\u89c2\u6d4b\u6027",children:"6 \u53ef\u89c2\u6d4b\u6027"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u4e00\u4e2a\u521b\u65b0\u6027\u7684\u5de5\u5177--pika_exporter\uff0c\u4ee5\u63d0\u5347\u5bf9 Pika \u6570\u636e\u5e93\u7684\u53ef\u89c2\u6d4b\u6027\u3002\u8fd9\u4e00\u5de5\u5177\u7684\u52a0\u5165\u4e0d\u4ec5\u662f\u5bf9\u6211\u4eec\u5bf9\u7cfb\u7edf\u76d1\u6d4b\u80fd\u529b\u7684\u6301\u7eed\u589e\u5f3a\u7684\u53cd\u6620\u3002\u800c\u5728\u7248\u672c\u7684\u540e\u7eed\u66f4\u65b0\u4e2d\uff0c\u6211\u4eec\u8fdb\u4e00\u6b65\u5145\u5b9e\u4e86\u6307\u6807\uff0c\u4e0d\u65ad\u4e30\u5bcc\u4e86 Pika \u7684\u53ef\u89c2\u6d4b\u6027\u3002\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u66f4\u4e3a\u5168\u9762\u548c\u7cbe\u51c6\u7684\u6570\u636e\u6d1e\u5bdf\u529b\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u65b0\u589e Pika \u53ef\u89c2\u6d4b\u7cfb\u7edf pika_exporter"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1388",children:"https://github.com/OpenAtomFoundation/pika/pull/1388"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u65b0\u589e\u7f51\u7edc I/O \u6d41\u91cf\u76d1\u63a7\u6307\u6807"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1733",children:"https://github.com/OpenAtomFoundation/pika/pull/1733"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u65b0\u589e\u547d\u4ee4\u7edf\u8ba1\u8017\u65f6\u6307\u6807"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1751",children:"https://github.com/OpenAtomFoundation/pika/pull/1751"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u65b0\u589e estimate_pending_compaction_bytes \u5ea6\u91cf\u6765\u5206\u6790\u788e\u7247\u7387\u6307\u6807"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1736",children:"https://github.com/OpenAtomFoundation/pika/pull/1736"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u65b0\u589e RocksDB \u6307\u6807"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1560",children:"https://github.com/OpenAtomFoundation/pika/pull/1560"})}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"7-\u5bb9\u5668\u5316\u90e8\u7f72",children:"7 \u5bb9\u5668\u5316\u90e8\u7f72"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u4e00\u4e2a\u5177\u6709\u521b\u65b0\u610f\u4e49\u7684\u91cc\u7a0b\u7891--pika-operator mvp \u7248\u672c\uff0c\u8fd9\u4e00\u7248\u672c\u5728\u6280\u672f\u4e0a\u5b9e\u73b0\u4e86\u4e00\u4e2a\u91cd\u8981\u76ee\u6807\uff1a\u5c06 Pika \u5355\u5b9e\u4f8b\u670d\u52a1\u8fc1\u79fb\u5230 Kubernetes\uff08K8s\uff09\u5e73\u53f0\u4e0a\u7684\u5feb\u901f\u90e8\u7f72\u3002\u8fd9\u4e0d\u4ec5\u662f\u5bf9\u6211\u4eec\u6301\u7eed\u5173\u6ce8\u884c\u4e1a\u53d1\u5c55\u7684\u4f53\u73b0\uff0c\u4e5f\u662f\u6211\u4eec\u4e0d\u65ad\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u7684\u8ffd\u6c42\u3002\u901a\u8fc7 pika-operator\uff0c\u6211\u4eec\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u66f4\u4fbf\u6377\u7684\u90e8\u7f72\u65b9\u6848\uff0c\u5c06 Pika \u7684\u9ad8\u6027\u80fd\u6570\u636e\u5e93\u5f15\u64ce\u4e0e Kubernetes \u7684\u7075\u6d3b\u6027\u76f8\u878d\u5408\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u7684\u5e94\u7528\u73af\u5883\u5e26\u6765\u66f4\u9ad8\u6548\u3001\u66f4\u5f39\u6027\u7684\u652f\u6301\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u5b9e\u73b0 Pika \u5355\u4f8b\u670d\u52a1\u5728 K8s \u4e0a\u5feb\u901f\u90e8\u7f72\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1243",children:"https://github.com/OpenAtomFoundation/pika/pull/1243"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u5b9e\u73b0\u4e86\u5728 MiniKube \u73af\u5883\u4e2d\u90e8\u7f72 Pika\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1330",children:"https://github.com/OpenAtomFoundation/pika/pull/1330"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u7ed9 pika-operator \u6dfb\u52a0 E2E \u6d4b\u8bd5\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1347",children:"https://github.com/OpenAtomFoundation/pika/pull/1347"})]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"8-\u8de8\u5e73\u53f0\u7f16\u8bd1",children:"8 \u8de8\u5e73\u53f0\u7f16\u8bd1"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0cPika \u5448\u73b0\u51fa\u4e00\u79cd\u5168\u9762\u6027\u7684\u84ec\u52c3\u53d1\u5c55\u6001\u52bf\uff0c\u5f97\u4ee5\u5728\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0\u4e0a\u5c55\u73b0\u5176\u4f18\u8d8a\u6027\u3002\u6b64\u7248\u672c\u7684\u7a81\u7834\u6027\u4e4b\u5904\u5728\u4e8e\uff0cPika \u5b9e\u73b0\u4e86\u5bf9 MacOS\u3001CentOS \u548c Ubuntu \u8fd9\u4e9b\u4e3b\u8981\u5e73\u53f0\u7684\u5b8c\u6574\u7f16\u8bd1\u548c\u4f7f\u7528\u652f\u6301\u3002\u8fd9\u4e2a\u4e3e\u63aa\u4e0d\u4ec5\u4ec5\u4f53\u73b0\u4e86\u6211\u4eec\u5bf9\u591a\u6837\u5316\u6280\u672f\u73af\u5883\u7684\u5173\u6ce8\uff0c\u4e5f\u662f\u4e3a\u4e86\u6700\u5927\u7a0b\u5ea6\u5730\u62d3\u5c55\u7528\u6237\u57fa\u7840\uff0c\u4e3a\u5e7f\u6cdb\u7684\u7528\u6237\u7fa4\u4f53\u63d0\u4f9b\u7075\u6d3b\u3001\u9ad8\u6548\u7684\u6570\u636e\u5e93\u89e3\u51b3\u65b9\u6848\u3002\u8fd9\u79cd\u8de8\u5e73\u53f0\u517c\u5bb9\u6027\u7684\u52a0\u5f3a\u5c06 Pika \u63a8\u5411\u66f4\u5e7f\u9614\u7684\u6280\u672f\u751f\u6001\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u652f\u6301 MacOS \u5e73\u53f0\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1372",children:"https://github.com/OpenAtomFoundation/pika/pull/1372"})]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"9-\u591a\u5e73\u53f0\u96c6\u6210\u6d4b\u8bd5\u53ca\u5355\u5143\u6d4b\u8bd5",children:"9 \u591a\u5e73\u53f0\u96c6\u6210\u6d4b\u8bd5\u53ca\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,e.jsx)(i.p,{children:"\u5728 v3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8fc8\u51fa\u4e86\u4e00\u4e2a\u4ee4\u4eba\u77a9\u76ee\u7684\u6b65\u4f10\uff0c\u4e0d\u4ec5\u5728\u591a\u4e2a\u4e3b\u8981\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0\u4e0a\u5b9e\u73b0\u4e86\u652f\u6301\uff0c\u8fd8\u5728\u6d4b\u8bd5\u9886\u57df\u5b9e\u65bd\u4e86\u5168\u9762\u5347\u7ea7\u3002\u6211\u4eec\u4e3a Ubuntu\u3001CentOS \u548c MacOS \u8fd9\u4e09\u5927\u5e73\u53f0\u642d\u5efa\u4e86\u6301\u7eed\u96c6\u6210\uff08CI\uff09\u73af\u5883\uff0c\u4ee5\u786e\u4fdd\u7cfb\u7edf\u7684\u5b8c\u6574\u6027\u548c\u7a33\u5b9a\u6027\u3002\u5728\u6d4b\u8bd5\u65b9\u9762\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u66f4\u4e3a\u5e7f\u6cdb\u7684\u8986\u76d6\uff0c\u5305\u62ec Go \u8bed\u8a00\u7684\u96c6\u6210\u6d4b\u8bd5\u3001TCL \u7684\u5355\u5143\u6d4b\u8bd5\u4ee5\u53ca Python \u7684\u7aef\u5230\u7aef\uff08E2E\uff09\u6d4b\u8bd5\u3002\u901a\u8fc7\u8fd9\u4e9b\u6d4b\u8bd5\u7b56\u7565\u7684\u5347\u7ea7\uff0c\u6211\u4eec\u5728\u786e\u4fdd\u7cfb\u7edf\u6027\u80fd\u548c\u53ef\u9760\u6027\u65b9\u9762\u8fc8\u51fa\u4e86\u66f4\u5927\u7684\u4e00\u6b65\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e CentOS \u73af\u5883\u4e0b\u7684 CI\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1534",children:"https://github.com/OpenAtomFoundation/pika/pull/1534"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e MacOS \u73af\u5883\u4e0b\u7684 CI\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1769",children:"https://github.com/OpenAtomFoundation/pika/pull/1769"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e E2E \u6d4b\u8bd5\u6846\u67b6\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1347",children:"https://github.com/OpenAtomFoundation/pika/pull/1347"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e\u5728 Github CI Workflow \u4e2d\u6dfb\u52a0 CMake \u7f16\u8bd1\u73af\u5883\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1268",children:"https://github.com/OpenAtomFoundation/pika/pull/1268"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e\u5728 TCL \u811a\u672c\u4e2d populate \u65b9\u6cd5\u6a21\u62df Redis debug populate \u65b9\u6cd5\uff0c\u7528\u4ee5\u586b\u5145\u6d4b\u8bd5\u6570\u636e\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1693",children:"https://github.com/OpenAtomFoundation/pika/pull/1693"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u65b0\u589e\u5728 blackwidow \u4e2d\u6dfb\u52a0 CMake \u6587\u4ef6\uff0c\u6dfb\u52a0\u5bf9 blackwidow \u7684\u5355\u5143\u6d4b\u8bd5\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1246",children:"https://github.com/OpenAtomFoundation/pika/pull/1246"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u79fb\u690d Redis \u6d4b\u8bd5\u811a\u672c\n",(0,e.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1357",children:"https://github.com/OpenAtomFoundation/pika/pull/1357"})]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"10-others",children:"10 Others"}),"\n",(0,e.jsx)(i.p,{children:"\u82e5\u60a8\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bda\u631a\u6b22\u8fce\u60a8\u626b\u63cf\u5fae\u4fe1\u4e8c\u7ef4\u7801\uff0c\u52a0\u5165\u6211\u4eec\u7684\u4ea4\u6d41\u7fa4\uff0c\u4e0e\u4e00\u4f17\u5fd7\u540c\u9053\u5408\u7684\u6210\u5458\u5c55\u5f00\u6df1\u5165\u7684\u8ba8\u8bba\uff0c\u6211\u4eec\u70ed\u5207\u671f\u5f85\u4e0e\u60a8\u5206\u4eab\u89c1\u89e3\u3001\u4ea4\u6d41\u5fc3\u5f97\uff0c\u4e3a\u5171\u540c\u7684\u6280\u672f\u63a2\u7d22\u548c\u521b\u65b0\u4e4b\u65c5\u6dfb\u7816\u52a0\u74e6\u3002\u5728\u8fd9\u4e2a\u7fa4\u4f53\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u5353\u8d8a\u7684\u667a\u6167\u548c\u4e92\u52a8\u7684\u5408\u4f5c\u7cbe\u795e\uff0c\u6784\u5efa\u51fa\u4e00\u4e2a\u76f8\u4e92\u5b66\u4e60\u3001\u4e0d\u65ad\u8fdb\u6b65\u7684\u6280\u672f\u5171\u540c\u4f53\u3002"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{alt:"2023-08-25-Pika-3.5.0",src:t(5967).A+"",width:"747",height:"431"})})]})}function u(n={}){const{wrapper:i}={...(0,l.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},5967:(n,i,t)=>{t.d(i,{A:()=>e});const e=t.p+"assets/images/2023-08-25-Pika-3.5.0-connect-577bc269745e6841d8dc76a6b24e382c.png"},8453:(n,i,t)=>{t.d(i,{R:()=>s,x:()=>p});var e=t(6540);const l={},o=e.createContext(l);function s(n){const i=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function p(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),e.createElement(o.Provider,{value:i},n.children)}}}]);