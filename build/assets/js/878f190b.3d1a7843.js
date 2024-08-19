"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[154],{4076:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>a});var o=t(4848),e=t(8453);const p={title:"What's new in PikiwiDB(Pika) v4.0.0",slug:"PikiwiDB-Pika--4.0.0",authors:[{name:"360 \u8f66\u91d1\u9e3d",title:"Pika \u5f00\u6e90\u793e\u533a"}],hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/PikiwiDB-Pika--4.0.0",source:"@site/blog/2024-07-08-PikiwiDB(Pika)-4.0.0.md",title:"What's new in PikiwiDB(Pika) v4.0.0",description:"\u5c0a\u656c\u7684\u793e\u533a\u6210\u5458\u53ca\u6280\u672f\u7231\u597d\u8005\u4eec\uff1a",date:"2024-07-08T00:00:00.000Z",tags:[],readingTime:17.085,hasTruncateMarker:!1,authors:[{name:"360 \u8f66\u91d1\u9e3d",title:"Pika \u5f00\u6e90\u793e\u533a"}],frontMatter:{title:"What's new in PikiwiDB(Pika) v4.0.0",slug:"PikiwiDB-Pika--4.0.0",authors:[{name:"360 \u8f66\u91d1\u9e3d",title:"Pika \u5f00\u6e90\u793e\u533a"}],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"What's new in Pika v3.5.4",permalink:"/blog/Pika-3.5.4"}},h={authorsImageUrls:[void 0]},a=[{value:"1 \u91cd\u5927\u6539\u8fdb",id:"1-\u91cd\u5927\u6539\u8fdb",level:2}];function u(n){const i={a:"a",br:"br",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,e.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"\u5c0a\u656c\u7684\u793e\u533a\u6210\u5458\u53ca\u6280\u672f\u7231\u597d\u8005\u4eec\uff1a\nPikiwiDB \u793e\u533a\u8363\u8000\u5730\u5ba3\u544a\u2014\u2014\u7ecf\u8fc7 9 \u4e2a\u6708\u6253\u78e8\u5e76\u5728\u751f\u4ea7\u73af\u5883\u7a33\u5b9a\u8fd0\u884c 5 \u4e2a\u6708\u7684 PikiwiDB(Pika) v4.0.0 \u3010\u4e0b\u6587\u7b80\u79f0 Pika\u3011\u4eca\u5929\u6b63\u5f0f\u53d1\u5e03\u3002\u5e0c\u671b\u57fa\u4e8e\u7b2c\u4e09\u4ee3\u5b58\u50a8\u5f15\u64ce Floyd \u7684\u8fd9\u4e2a\u65b0\u7248\u672c\u80fd\u4e3a\u793e\u533a\u7528\u6237\u4eec\u5e26\u6765\u66f4\u5353\u8d8a\u7684\u4f53\u9a8c\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"1-\u91cd\u5927\u6539\u8fdb",children:"1 \u91cd\u5927\u6539\u8fdb"}),"\n",(0,o.jsx)(i.p,{children:"1.1 \u7b2c\u4e09\u4ee3\u5b58\u50a8\u5f15\u64ce Floyd\nFloyd \u5982\u540c\u5176\u524d\u4ee3 Blackwidow\uff0c\u57fa\u4e8e RocksDB\uff0c\u4e0d\u4ec5\u652f\u6301\u57fa\u7840\u7684 String \u7ed3\u6784\uff0c\u4e5f\u539f\u751f\u652f\u6301\u4e86 Hash\u3001List\u3001Set\u3001Stream\u53ca ZSet \u7b49 KKV \u5f62\u5f0f\u7684\u590d\u5408\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"RocksDB \u5b9e\u4f8b\u6570\u53ef\u914d\u7f6e"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u6452\u5f03\u4e86 Blackwidow \u6309\u6570\u636e\u7c7b\u578b\u91c7\u7528 RocksDB \u5b9e\u4f8b\u7684\u7269\u7406\u9694\u79bb\u6a21\u5f0f\uff0cFloyd \u91c7\u7528\u4e86 RocksDB \u7684 Column-Family \u865a\u62df\u9694\u79bb\u673a\u5236\uff0c\u5728\u5355\u4e2a RocksDB \u5b9e\u4f8b\u4e0b\u53ef\u5b58\u50a8\u6240\u6709\u7c7b\u578b\u7684\u6570\u636e\u3002\u7528\u6237\u53ef\u81ea\u7531\u8bbe\u5b9a Pika \u5b9e\u4f8b\u4e2d\u6bcf\u4e2a DB\u3010\u7b49\u540c\u4e8eRedis DB\u3011\u4e2d RocksDB \u5b9e\u4f8b\u7684\u6570\u91cf\uff0c\u800c\u6570\u636e\u7684\u5b58\u50a8\u5219\u4f9d\u636e key \u7684 hash \u503c\u5206\u914d\u81f3\u76f8\u5e94\u7684 RocksDB \u5b9e\u4f8b\uff0c\u51cf\u5c0f\u4e86\u6570\u636e\u7684\u7a7a\u95f4\u653e\u5927\u548c\u8bfb\u653e\u5927\u6548\u5e94\uff0c\u5b9e\u73b0\u4e86\u673a\u5668\u8d44\u6e90\u7684\u9ad8\u6548\u5229\u7528\u3002"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\u7981\u6b62\u91cd\u590d key"}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.img,{alt:"2024-05-16-PikiwiDB(Pika)-4.0.0-key",src:t(9805).A+"",width:"1080",height:"1006"}),"\n\u57fa\u4e8e RocksDB \u7684 Column-Family \u865a\u62df\u9694\u79bb\u673a\u5236\uff0cFloyd \u628a\u6240\u6709\u7c7b\u578b\u7684 key \u548c string \u4e00\u8d77\u5b58\u50a8\u5728 Column-Family 0\u3002\u5728\u6b64\u5b58\u50a8\u57fa\u7840\u4e4b\u4e0a\uff0c\u53ef\u660e\u786e\u7981\u6b62\u4e0d\u540c\u7c7b\u578b\u7684 key \u91cd\u590d\uff0c\u8fd9\u4e00\u8bbe\u8ba1\u65e8\u5728\u675c\u7edd\u6f5c\u5728\u7684\u6570\u636e\u5197\u4f59\u4e0e\u4e0d\u4e00\u81f4\u6027\uff0c\u4e0e Redis \u670d\u52a1\u7279\u6027\u4fdd\u6301\u4e00\u81f4\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u6574\u4f53\u6548\u7387\u4e0e\u6570\u636e\u8d28\u91cf\u3002"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Floyd \u8be6\u7ec6\u8bf4\u660e"}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["\u5982\u679c\u5bf9 Floyd \u5b58\u50a8\u5f15\u64ce\u611f\u5174\u8da3\uff0c\u8bf7\u8be6\u9605\u300aFloyd \u5b58\u50a8\u5f15\u64ce\u300b\u3010\u94fe\u63a5\uff1a",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/discussions/2052%E3%80%91%E3%80%82%E7%94%B1%E4%BA%8E",children:"https://github.com/OpenAtomFoundation/pika/discussions/2052\u3011\u3002\u7531\u4e8e"})," Floyd \u524d\u540e\u8fdb\u884c\u4e86\u591a\u4e2a\u7248\u672c\u7684\u8fed\u4ee3\uff0c\u6240\u4ee5\u9605\u8bfb\u8be5 github discussion \u6587\u6863\u65f6\u8bf7\u6ce8\u610f\u524d\u540e\u65f6\u95f4\uff0c\u5982\u6709\u76f8\u5173\u51b2\u7a81\u6027\u8bf4\u6cd5\uff0c\u4ee5\u6700\u65b0\u65e5\u671f\u7684\u6587\u5b57\u4e3a\u51c6\u3002"]}),"\n",(0,o.jsx)(i.p,{children:"\u5173\u952e PR\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["PikiwiDB(Pika)  \u652f\u6301 Floyd \u5b58\u50a8\u5f15\u64ce",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2413",children:"https://github.com/OpenAtomFoundation/pika/pull/2413"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u6dfb\u52a0 Floyd \u7684 compaction-filter \u7684 Gtest",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2669",children:"https://github.com/OpenAtomFoundation/pika/pull/2669"})]}),"\n",(0,o.jsxs)(i.li,{children:["Pika \u4e0d\u652f\u6301\u4e0d\u540c\u7c7b\u578b\u7684\u91cd\u590d key, \u5199\u5165\u91cd\u590d key \u8fd4\u56de\u975e\u6cd5\u7c7b\u578b",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2609",children:"https://github.com/OpenAtomFoundation/pika/pull/2609"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u5bf9 HyperLogLog \u548c String \u8fdb\u884c\u7c7b\u578b\u9694\u79bb\uff0c\u786e\u4fdd HyperLogLog \u64cd\u4f5c\u4e0e String \u64cd\u4f5c\u660e\u786e\u533a\u5206\u5f00",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2720",children:"https://github.com/OpenAtomFoundation/pika/pull/2720"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u6dfb\u52a0\u652f\u6301\u5206\u533a\u7d22\u5f15\u8fc7\u6ee4\u7684\u529f\u80fd",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2601",children:"https://github.com/OpenAtomFoundation/pika/pull/2601"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"1.2 Mget \u6279\u91cf\u67e5\u8be2\u7f13\u5b58"}),"\n",(0,o.jsx)(i.p,{children:"Pika v3.5.2 \u7684\u70ed\u6570\u636e\u7f13\u5b58\u53ea\u5b9e\u73b0\u4e86\u5bf9\u70ed\u70b9 Key \u7684\u70b9\u67e5(\u5982get/hget)\uff0c\u5728\u540e\u7eed\u7684 v3.5.3 \u548c v3.5.4 \u4fee\u590d\u82e5\u5e72 bug \u540e\uff0c\u5bf9\u70ed\u6570\u636e\u7684\u70b9\u67e5\u76ee\u524d\u5df2\u7ecf\u975e\u5e38\u7a33\u5b9a\u3002\u7136\u800c\u5e76\u672a\u652f\u6301\u6279\u91cf\u67e5\u8be2(\u5982 mget etc)\u3002\n\u5185\u90e8\u4e1a\u52a1\u4fa7\u53cd\u9988\u6279\u91cf\u67e5\u8be2\u901f\u5ea6\u6bd4\u8f83\u6162\uff0c\u5728 40C/256GiB/2TiB SATA SSD \u89c4\u683c\u673a\u5668\u4e0a\u6570\u636e\u91cf\u8d85\u8fc7 100GiB \u65f6\uff0cPika v3.3.6 30% \u6279\u91cf\u67e5\u8be2\u5ef6\u8fdf\u8d85\u8fc7 35ms\u3002\u4f46\u7531\u4e8e Pika \u70ed\u6570\u636e\u7f13\u5b58\u5c1a\u672a\u652f\u6301\u6279\u91cf\u67e5\u8be2\uff0c\u6027\u80fd\u5e76\u672a\u6539\u5584\u3002"}),"\n",(0,o.jsxs)(i.p,{children:["\u4e3a\u4e86\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\uff0cPika \u56e2\u961f\u5f00\u53d1\u4e86\u6279\u91cf\u67e5\u8be2\u70ed\u6570\u636e\u7f13\u5b58\u529f\u80fd\uff0c\u663e\u8457\u63d0\u5347\u4e86\u6279\u91cf\u67e5\u8be2\u6027\u80fd\uff0c\u964d\u4f4e\u4e86\u67e5\u8be2\u5ef6\u8fdf\u548c\u5931\u8d25\u7387\u3002\u76f8\u5173\u6280\u672f\u7ec6\u8282\u8bf7\u9605\u8bfb\u300aPikiwiDB (Pika) \u6df7\u5408\u5b58\u50a8\u4e4b\u6279\u91cf\u67e5\u8be2\u300b \u3010\u94fe\u63a5\uff1a",(0,o.jsx)(i.a,{href:"https://mp.weixin.qq.com/s/KFLPruSdB66TMRxUfR9PbQ",children:"https://mp.weixin.qq.com/s/KFLPruSdB66TMRxUfR9PbQ"})," \u3011\u3002"]}),"\n",(0,o.jsx)(i.p,{children:"\u5173\u952e PR \uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Mget \u652f\u6301\u591a key \u67e5\u8be2\u7f13\u5b58, \u8bb0\u5f55\u672a\u547d\u4e2d\u7684 key \u53bb DB \u4e2d\u67e5\u8be2\uff0c\u63d0\u5347 Pika \u670d\u52a1\u7684\u8bfb\u6027\u80fd",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2675",children:"https://github.com/OpenAtomFoundation/pika/pull/2675"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Mget \u6ca1\u6709\u4f7f\u7528\u89e3\u6790 ttl \u7684\u51fd\u6570\u5bfc\u81f4\u51fa\u73b0\u90e8\u5206key\u7684ttl\u672a\u88ab\u66f4\u65b0\uff0c\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2730",children:"https://github.com/OpenAtomFoundation/pika/pull/2730"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"1.3 \u4e3b\u4ece\u590d\u5236"}),"\n",(0,o.jsx)(i.p,{children:'Pika v3.3.6 \u6709\u5f88\u591a\u4e3b\u4ece\u590d\u5236\u7684\u7f3a\u9677\u3002v4.0.0 \u7248\u672c\u5bf9 Pika \u5168\u91cf\u590d\u5236\u53ca\u589e\u91cf\u590d\u5236\u8fdb\u884c\u4e86\u5927\u91cf\u4f18\u5316\u548c bug \u4fee\u590d\uff0c\u53d6\u5f97\u4e86\u975e\u5e38\u597d\u7684\u6548\u679c\u3002\n\u5e76\u5728 info \u547d\u4ee4\u4e2d\u8f93\u51fa\u4e86 "repl_connect_status" \u6307\u6807(PR 2638)\uff0c\u4ee5\u65b9\u4fbf\u7528\u6237\u66f4\u52a0\u660e\u786e\u6e05\u6670\u7684\u786e\u5b9a\u5f53\u524d\u7684\u4e3b\u4ece\u590d\u5236\u72b6\u6001\u3002'}),"\n",(0,o.jsx)(i.p,{children:"\u5173\u952e PR \uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u6279\u91cf\u6269\u5bb9\u65f6\uff0c\u591a\u4e2a slave \u540c\u65f6\u8fde\u63a5 master, \u77ed\u65f6\u95f4\u591a\u6b21 bgsave \u5bfc\u81f4\u90e8\u5206\u4ece\u8282\u70b9\u6570\u636e\u4e0d\u5b8c\u6574\u7684\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2746",children:"https://github.com/OpenAtomFoundation/pika/pull/2746"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Spop \u5728\u5199 binlog \u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u7ade\u6001\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2647",children:"https://github.com/OpenAtomFoundation/pika/pull/2647"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u591a DB \u4e0b\u5168\u91cf\u540c\u6b65\u8d85\u65f6\u540e\u4e0d\u91cd\u8bd5\u7684\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2667",children:"https://github.com/OpenAtomFoundation/pika/pull/2667"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u591a DB \u4e3b\u4ece\u8d85\u65f6\u573a\u666f\u4e0b\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u7a97\u53e3\u5d29\u6e83\u7684\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2666",children:"https://github.com/OpenAtomFoundation/pika/pull/2666"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u4e3b\u4ece\u540c\u6b65\u9650\u901f\u903b\u8f91\u4e2d\u91cd\u590d\u89e3\u9501\u7684\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2657",children:"https://github.com/OpenAtomFoundation/pika/pull/2657"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u91cd\u6784\u4e3b\u4ece\u590d\u5236\u6a21\u5f0f slave \u8282\u70b9\u7684\u4e3b\u4ece\u540c\u6b65\u7ebf\u7a0b\u6a21\u578b\uff0c\u5c3d\u53ef\u80fd\u51cf\u5c11 binlog \u6d88\u8d39\u963b\u585e\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2638",children:"https://github.com/OpenAtomFoundation/pika/pull/2638"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"1.4 Redis Stream"}),"\n",(0,o.jsx)(i.p,{children:"Redis Stream \u7c7b\u4f3c\u4e8e\u6d88\u606f\u961f\u5217\uff08MQ\uff09\uff0c\u4ee5\u4fbf\u66f4\u5b89\u5168\u5730\u4f20\u9012\u6d88\u606f\u3002\u4e3a\u4e86\u786e\u4fdd\u6570\u636e\u7684\u5b89\u5168\u6027\uff0c\u5e95\u5c42\u5f15\u64ce BlackWidow \u548c Floyd \u4e2d\u7279\u522b\u6dfb\u52a0\u4e86\u5bf9 Stream \u6570\u636e\u7c7b\u578b\u7684\u652f\u6301\u3002\n\u5173\u952e PR\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d pkpatternmatchdel \u547d\u4ee4\u4f7f\u7528\u9519\u8bef\u5bfc\u81f4\u7684 stream \u7c7b\u578b\u6570\u636e\u5220\u9664\u5f02\u5e38\u7684\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2726",children:"https://github.com/OpenAtomFoundation/pika/pull/2726"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Keyspace \u547d\u4ee4\u672a\u8ba1\u7b97 Stream \u7c7b\u578b\u6570\u636e\u7684\u95ee\u9898",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2705",children:"https://github.com/OpenAtomFoundation/pika/pull/2705"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"1.5 Compaction"}),"\n",(0,o.jsx)(i.p,{children:"PikiwiDB(Pika) \u7684\u5e95\u5c42\u78c1\u76d8\u5b58\u50a8\u5f15\u64ce RocksDB \u5728\u8fdb\u884c compaction \u65f6\u4f1a\u663e\u8457\u5f71\u54cd PikiwiDB(Pika) \u7684\u8bfb\u5199\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u63a7\u5236\u597d compaction \u662f\u4f18\u5316 Pika \u8bfb\u5199\u6027\u80fd\u7684\u5173\u952e\u3002"}),"\n",(0,o.jsx)(i.p,{children:"Floyd \u4f7f\u7528\u4e86 v8.7.3 \u7248\u672c\u7684 RocksDB\uff0c\u5f00\u653e\u4e86\u66f4\u591a RocksDB \u53c2\u6570\uff0c\u4ee5\u65b9\u4fbf\u7528\u6237\u4f18\u5316 RocksDB \u6027\u80fd\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"enable-partitioned-index-filters\uff1a \u652f\u6301\u52a0\u8f7d\u5206\u533a\u7d22\u5f15\u8fc7\u6ee4\u5668\uff0c\u52a0\u5feb RocksDB \u67e5\u627e\u901f\u5ea6\u3002"}),"\n",(0,o.jsx)(i.li,{children:"min-write-buffer-number-to-merge: \u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u5982\u679c\u5c06\u6b64\u503c\u8bbe\u7f6e\u5f97\u66f4\u5927\uff0c\u610f\u5473\u7740\u9700\u8981\u66f4\u591a\u7684\u5199\u7f13\u51b2\u533a\u88ab\u586b\u6ee1\u540e\u624d\u8fdb\u884c flush\u3002\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11 flush \u7684\u9891\u7387\uff0c\u589e\u52a0\u6570\u636e\u5728\u5185\u5b58\u4e2d\u7684\u7d2f\u79ef\u91cf\uff0c\u4ece\u800c\u53ef\u80fd\u63d0\u9ad8\u5199\u5165\u541e\u5410\u91cf\u3002"}),"\n",(0,o.jsx)(i.li,{children:"level0-stop-writes-trigger: \u9ed8\u8ba4\u503c\u4e3a 36\uff0c\u5b9a\u4e49\u4e86 L0 \u5c42\u4e2d sst \u6587\u4ef6\u7684\u6700\u5927\u6570\u91cf\uff0c\u4e00\u65e6\u8fbe\u5230\u8fd9\u4e2a\u6570\u91cf\uff0cRocksDB \u5c06\u4f1a\u91c7\u53d6 \u6682\u505c\u5199\u5165\u3001\u5f3a\u5236 compaction \u7b49\u63aa\u65bd\u6765\u9632\u6b62\u5199\u5165\u64cd\u4f5c\u7ee7\u7eed\u7d2f\u79ef\uff0c\u4ee5\u907f\u514d L0 \u5c42\u53d8\u5f97\u8fc7\u4e8e\u5e9e\u5927\uff0c\u8fdb\u800c\u53ef\u80fd\u5bfc\u81f4\u5199\u5165\u653e\u5927\u3001\u67e5\u8be2\u6027\u80fd\u4e0b\u964d\u7b49\u95ee\u9898\u3002"}),"\n",(0,o.jsx)(i.li,{children:"level0-slowdown-writes-trigger\uff1a\u9ed8\u8ba4\u503c\u4e3a 20\uff0c\u7528\u4e8e\u63a7\u5236\u5f53 Level 0 \u7684 SST \u6587\u4ef6\u6570\u91cf\u8fbe\u5230\u8fd9\u4e2a\u9608\u503c\u65f6\uff0c\u89e6\u53d1\u5199\u51cf\u901f\uff08write slowdown\uff09\uff0c\u9632\u6b62 Level 0 \u7684\u6587\u4ef6\u6570\u91cf\u8fc7\u591a\uff0c\u5bfc\u81f4\u540e\u7eed compaction \u64cd\u4f5c\u7684\u538b\u529b\u8fc7\u5927\u3002"}),"\n",(0,o.jsx)(i.li,{children:"level0-file-num-compaction-trigger\uff1a\u9ed8\u8ba4\u503c\u4e3a 4\uff0c\u5f53 Level 0 \u7684 SST \u6587\u4ef6\u6570\u91cf\u8fbe\u5230\u8fd9\u4e2a\u53c2\u6570\u8bbe\u5b9a\u7684\u9608\u503c\u65f6\uff0cRocksDB \u4f1a\u5f00\u59cb\u6267\u884c compaction \u64cd\u4f5c\uff0c\u5c06 Level 0 \u7684\u6587\u4ef6\u5408\u5e76\u5230 Level 1\uff0c\u4ee5\u51cf\u5c11 Level 0 \u7684\u6587\u4ef6\u6570\u91cf\uff0c\u964d\u4f4e\u8bfb\u53d6\u5ef6\u8fdf\uff0c\u5e76\u4f18\u5316\u5b58\u50a8\u7a7a\u95f4\u7684\u5229\u7528\u7387\u3002"}),"\n",(0,o.jsx)(i.li,{children:"max-subcompactions\uff1a\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u7528\u4e8e\u63a7\u5236RocksDB \u4e2d\u5e76\u53d1\u6267\u884c\u7684 sub-compaction \u4efb\u52a1\u6570\u91cf\uff0c\u5176\u503c\u4e3a 1 \u8868\u793a\u5173\u95ed sub-compaction\u3002\u5982\u679c\u7cfb\u7edf\u8d44\u6e90\u5145\u8db3\uff0c\u5efa\u8bae\u63d0\u5347\u8be5\u53c2\u6570\u4ee5\u4f18\u5316 compaction \u6548\u7387\u3002"}),"\n",(0,o.jsx)(i.li,{children:"max-bytes-for-level-base\uff1a\u6307\u5b9a\u4e86 L1 SST \u6587\u4ef6\u603b\u7684\u5927\u5c0f\u3002\u8fd9\u4e2a\u5927\u5c0f\u662f RocksDB \u8fdb\u884c\u6570\u636e\u5206\u5c42\u7ba1\u7406\u548c compaction \u51b3\u7b56\u7684\u91cd\u8981\u4f9d\u636e\uff1a\u5982\u679c L1 \u5c42\u7684\u5927\u5c0f\u8bbe\u7f6e\u5f97\u592a\u5c0f\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 L0 \u5c42\u7684 compaction \u8fc7\u4e8e\u9891\u7e41\uff0c\u8fdb\u800c\u5f71\u54cd\u5199\u6027\u80fd\u3002\u53cd\u4e4b\uff0c\u5982\u679c\u8bbe\u7f6e\u5f97\u592a\u5927\uff0c\u53ef\u80fd\u4f1a\u5360\u7528\u8f83\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u5e76\u4e14\u5f71\u54cd\u8bfb\u53d6\u6027\u80fd\uff0c\u56e0\u4e3a\u8bfb\u53d6\u64cd\u4f5c\u53ef\u80fd\u9700\u8981\u8de8\u8d8a\u66f4\u591a\u7684\u5c42\u7ea7\u3002Pika \u6ca1\u6709\u5728 pika.conf \u4e2d\u5f00\u653e\u6b64\u53c2\u6570\u7ed9\u7528\u6237\u914d\u7f6e\uff0c\u800c\u662f\u4f7f\u7528\u5176\u4ed6\u53c2\u6570\uff08level0-file-num-compaction-trigger \u548c write-buffer-size\uff09\u8ba1\u7b97\u540e\u7684\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"storage_options_.options.max_bytes_for_level_base = g_pika_conf->level0_file_num_compaction_trigger() * g_pika_conf->write_buffer_size()"}),"\n",(0,o.jsxs)(i.p,{children:["\u5173\u952e PR\uff1a\n\u6dfb\u52a0 Floyd \u7684 compaction-filter \u7684 Gtest\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2669",children:"https://github.com/OpenAtomFoundation/pika/pull/2669"}),"\n\u6dfb\u52a0\u652f\u6301\u5206\u533a\u7d22\u5f15\u8fc7\u6ee4\u7684\u529f\u80fd\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2601",children:"https://github.com/OpenAtomFoundation/pika/pull/2601"}),"\n\u65b0\u589e RocksDB Compaction \u7b56\u7565\u52a8\u6001\u8c03\u6574\u53c2\u6570\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u8c03\u6574 Compaction \u7b56\u7565\uff0c\u964d\u4f4e Compaction \u64cd\u4f5c\u5bf9\u670d\u52a1\u6027\u80fd\u7684\u635f\u8017\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2538",children:"https://github.com/OpenAtomFoundation/pika/pull/2538"}),"\n1.6 \u53ef\u89c2\u6d4b\u6027\nv3.5 \u7248\u672c\u589e\u52a0\u4e86\u5305\u62ec\u547d\u4e2d\u7387\u3001\u6bcf\u79d2\u547d\u4e2d\u6b21\u6570\u3001Redis Cache \u5185\u5b58\u4f7f\u7528\u91cf\u3001Redis Cache \u4e2a\u6570\u3001Redis Cache DB \u4e2a\u6570 \u7b49\u6307\u6807\uff0c\u4f46\u662f\u5728\u96c6\u7fa4\u65b9\u9762\u7684\u53ef\u89c2\u6d4b\u6027\u662f\u7f3a\u5931\u7684\u3002v4.0.0 \u5bf9 Codis-Proxy \u7684 P99\u3001P999\u3001\u5ef6\u8fdf\u7b49\u76d1\u63a7\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u548c\u5c55\u793a\uff0c\u53ef\u4ee5\u76f4\u89c2\u5730\u53cd\u6620\u7ebf\u4e0a Codis-proxy \u7684\u8fd0\u884c\u60c5\u51b5\u3002"]}),"\n",(0,o.jsx)(i.p,{children:"v4.0.0 \u5f00\u59cb\u8fd8\u63d0\u4f9b\u65b0\u7684\u5de5\u5177\uff1a\u6839\u636e pika benchmark \u5de5\u5177\u538b\u6d4b\u7ed3\u679c\u81ea\u52a8\u751f\u6210\u53ef\u89c6\u5316\u7684\u7edf\u8ba1\u56fe\u8868\u3002"}),"\n",(0,o.jsxs)(i.p,{children:["\u5173\u952e PR\uff1a\nCodis \u652f\u6301 info \u547d\u4ee4, \u53ef\u4ee5\u901a\u8fc7\u8be5\u547d\u4ee4\u67e5\u8be2 Codis-proxy \u7684 info \u4fe1\u606f\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2688",children:"https://github.com/OpenAtomFoundation/pika/pull/2688"}),"\nCodis-proxy \u65b0\u589e P99 P95 \u7b49\u76d1\u63a7\u8017\u65f6\u6307\u6807\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2668",children:"https://github.com/OpenAtomFoundation/pika/pull/2668"}),"\n\u6dfb\u52a0 Pika \u538b\u6d4b\u6307\u6807\uff0c\u63d0\u5347 Pika \u538b\u6d4b\u6548\u7387\uff0c\u5e76\u8f93\u51fa\u53ef\u89c6\u5316\u7684\u7edf\u8ba1\u56fe\u8868\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2663",children:"https://github.com/OpenAtomFoundation/pika/pull/2663"})]}),"\n",(0,o.jsxs)(i.p,{children:["1.7 \u6d4b\u8bd5\u96c6\nPikiwiDB(Pika)  \u6d4b\u8bd5\u96c6\u7531 gtest \u5355\u6d4b\u3001Redis TCL \u6d4b\u8bd5\u96c6\u548c Go \u6d4b\u8bd5\u96c6\u7ec4\u6210\u3002v4.0.0 \u4e2d\u4e30\u5bcc\u4e86\u8bf8\u591a\u7279\u6027\u7684 go test \u529f\u80fd\uff0c\u5e76\u8fdb\u4e00\u6b65\u5b8c\u5584\u4e86\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684 TCL \u6d4b\u8bd5\u3002\n\u5173\u952e PR\uff1a\n\u6dfb\u52a0 Floyd \u7684 compaction-filter \u7684 Gtest\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2669",children:"https://github.com/OpenAtomFoundation/pika/pull/2669"}),"\nPika Geo \u6570\u636e\u7c7b\u578b\u589e\u52a0 TCL \u6d4b\u8bd5\uff0c\u5e76\u4fee\u590d\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u7f3a\u9677\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2753",children:"https://github.com/OpenAtomFoundation/pika/pull/2753"}),"\n1.8 \u8de8\u5e73\u53f0\nPikiwiDB(Pika)  \u4ee5\u5f80\u4ec5\u652f\u6301 centos \u548c ubuntu \u7b49 linux \u5e73\u53f0\uff0cv3.5 \u5f00\u59cb\u652f\u6301 Mac \u7b49\u5e73\u53f0\u3002v4.0.0 \u5c06\u5bf9 Mac \u5e73\u53f0\u7684\u652f\u6301\u6269\u5c55\u81f3 FreeBSD \u5e73\u53f0\u3002\n\u5173\u952e PR\uff1a\nPika \u652f\u6301\u5728 FreeBSD14 \u5e73\u53f0\u4e0a\u8fdb\u884c\u7f16\u8bd1\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2711",children:"https://github.com/OpenAtomFoundation/pika/pull/2711"}),"\n2 \u6539\u8fdb\u5217\u8868\n\u4e0b\u9762\u8be6\u7ec6\u5217\u51fa\u4e86\u672c\u6b21\u53d1\u7248\u7684\u4e3b\u8981\u529f\u80fd\u5347\u7ea7\u548c\u6539\u8fdb\u3002\n2.1 \u65b0\u7279\u6027"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Pika Geo \u6570\u636e\u7c7b\u578b\u589e\u52a0 TCL \u6d4b\u8bd5\uff0c\u5e76\u4fee\u590d\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u7f3a\u9677\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2753",children:"https://github.com/OpenAtomFoundation/pika/pull/2753"})]}),"\n",(0,o.jsxs)(i.li,{children:["Pika \u652f\u6301\u5728 FreeBSD14 \u5e73\u53f0\u4e0a\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2711",children:"https://github.com/OpenAtomFoundation/pika/pull/2711"})]}),"\n",(0,o.jsxs)(i.li,{children:["Pika \u7ebf\u7a0b\u6574\u7406\uff0c\u907f\u514d\u542f\u52a8\u8fc7\u591a\u65e0\u7528\u7ebf\u7a0b\uff0c\u5bf9\u4e0d\u540c\u7684\u7ebf\u7a0b\u8fdb\u884c\u547d\u540d\uff0c\u65b9\u4fbf\u95ee\u9898\u5b9a\u4f4d\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2697",children:"https://github.com/OpenAtomFoundation/pika/pull/2697"})]}),"\n",(0,o.jsxs)(i.li,{children:["Mget \u652f\u6301\u591a key \u67e5\u8be2\u7f13\u5b58, \u8bb0\u5f55\u672a\u547d\u4e2d\u7684 key \u53bb DB \u4e2d\u67e5\u8be2\uff0c\u63d0\u5347 Pika \u670d\u52a1\u7684\u8bfb\u6027\u80fd\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2675",children:"https://github.com/OpenAtomFoundation/pika/pull/2675"})]}),"\n",(0,o.jsxs)(i.li,{children:["Codis \u652f\u6301 info \u547d\u4ee4, \u53ef\u4ee5\u901a\u8fc7\u8be5\u547d\u4ee4\u67e5\u8be2 Codis-proxy \u7684 info \u4fe1\u606f\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2688",children:"https://github.com/OpenAtomFoundation/pika/pull/2688"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u6dfb\u52a0 Floyd \u7684 compaction-filter \u7684 Gtest\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2669",children:"https://github.com/OpenAtomFoundation/pika/pull/2669"})]}),"\n",(0,o.jsxs)(i.li,{children:["Codis-proxy \u65b0\u589e P99 P95 \u7b49\u76d1\u63a7\u8017\u65f6\u6307\u6807\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2668",children:"https://github.com/OpenAtomFoundation/pika/pull/2668"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u6dfb\u52a0 Pika \u538b\u6d4b\u6307\u6807\uff0c\u63d0\u5347 Pika \u538b\u6d4b\u6548\u7387\uff0c\u5e76\u8f93\u51fa\u53ef\u89c6\u5316\u7684\u7edf\u8ba1\u56fe\u8868\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2663",children:"https://github.com/OpenAtomFoundation/pika/pull/2663"})]}),"\n",(0,o.jsxs)(i.li,{children:["Pika \u4e3b\u4ece\u590d\u5236\u65b0\u589e\u76d1\u63a7\u6307\u6807 repl_connect_status, \u53ef\u4ee5\u66f4\u52a0\u660e\u786e\u6e05\u6670\u7684\u786e\u5b9a\u5f53\u524d\u7684\u4e3b\u4ece\u590d\u5236\u7684\u72b6\u6001\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2638",children:"https://github.com/OpenAtomFoundation/pika/pull/2638"})]}),"\n",(0,o.jsxs)(i.li,{children:["Pika \u4e0d\u652f\u6301\u4e0d\u540c\u7c7b\u578b\u7684\u91cd\u590d key, \u5199\u5165\u91cd\u590d key \u8fd4\u56de\u975e\u6cd5\u7c7b\u578b\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2609",children:"https://github.com/OpenAtomFoundation/pika/pull/2609"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u6dfb\u52a0\u652f\u6301\u5206\u533a\u7d22\u5f15\u8fc7\u6ee4\u7684\u529f\u80fd\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2601",children:"https://github.com/OpenAtomFoundation/pika/pull/2601"})]}),"\n",(0,o.jsxs)(i.li,{children:["Pika \u652f\u6301\u7b2c\u4e09\u4ee3\u5b58\u50a8\u5f15\u64ce Floyd, \u901a\u8fc7\u652f\u6301\u591a rocksdb \u5b9e\u4f8b\u3001\u5bf9 Blob \u7684\u4f7f\u7528\u8fdb\u884c\u4f18\u5316\u3001\u5bf9\u8fc7\u671f\u6570\u636e\u7684\u6e05\u7406\u8fdb\u884c\u4f18\u5316\uff0c\u63d0\u5347\u4e86 Pika \u5b9e\u4f8b\u7684\u8bfb\u5199\u6027\u80fd\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2413",children:"https://github.com/OpenAtomFoundation/pika/pull/2413"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"2.2 bug \u4fee\u590d"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d iter \u672a\u88ab\u6790\u6784\uff0c\u5bfc\u81f4 pkpatternmatchdel \u5728\u8fd4\u56de\u4e4b\u524d\u4e0d\u4f1a\u5220\u9664 iter\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4 rocksdb \u6c38\u8fdc\u5f15\u7528\u4e00\u4e2a\u7248\u672c\uff0c\u5bfc\u81f4\u6570\u636e\u4e0d\u7b26\u5408\u9884\u671f\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2785",children:"https://github.com/OpenAtomFoundation/pika/pull/2785"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d config \u53c2\u6570 min-blob-size \u5e26\u5355\u4f4d\u65f6\u89e3\u6790\u9519\u8bef\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2767",children:"https://github.com/OpenAtomFoundation/pika/pull/2767"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d zverank \u8fd4\u56de\u503c\u5f02\u5e38\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2673",children:"https://github.com/OpenAtomFoundation/pika/pull/2673"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Pika-port \u4f20\u8f93\u6570\u636e\u8fc7\u7a0b\u4e2d\u62a5\u9519\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2758",children:"https://github.com/OpenAtomFoundation/pika/pull/2758"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u56e0\u4e3a\u5806\u4e0a\u5206\u914d\u7684\u7f13\u51b2\u533a\u8d8a\u754c\u5bfc\u81f4 Dbsize \u547d\u4ee4\u8fd0\u884c\u65f6\u5d29\u6e83\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2749",children:"https://github.com/OpenAtomFoundation/pika/pull/2749"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u6279\u91cf\u6269\u5bb9\u65f6\uff0c\u591a\u4e2a slave \u540c\u65f6\u8fde\u63a5 master, \u77ed\u65f6\u95f4\u591a\u6b21 bgsave \u5bfc\u81f4\u90e8\u5206\u4ece\u8282\u70b9\u6570\u636e\u4e0d\u5b8c\u6574\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2746",children:"https://github.com/OpenAtomFoundation/pika/pull/2746"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u53c2\u6570\u672a\u521d\u59cb\u5316\u5bfc\u81f4 slotsscan \u7b49\u547d\u4ee4\u4e0d\u80fd\u548c bgsave \u547d\u4ee4\u76f8\u4e92\u5236\u8861\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2745",children:"https://github.com/OpenAtomFoundation/pika/pull/2745"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Slotmigrate \u8fc1\u79fb\u6570\u636e\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8fd4\u56de\u503c\u8bbe\u7f6e\u9519\u8bef\uff0c\u5f02\u5e38\u573a\u666f\u4e0b\u4f1a\u7ec8\u6b62\u6570\u636e\u8fc1\u79fb\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2741",children:"https://github.com/OpenAtomFoundation/pika/pull/2741"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Mget \u6ca1\u6709\u4f7f\u7528\u89e3\u6790 ttl \u7684\u51fd\u6570\u5bfc\u81f4\u51fa\u73b0\u90e8\u5206key\u7684ttl\u672a\u88ab\u66f4\u65b0\uff0c\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2730",children:"https://github.com/OpenAtomFoundation/pika/pull/2730"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d pkpatternmatchdel \u547d\u4ee4\u4f7f\u7528\u9519\u8bef\u5bfc\u81f4\u7684 stream \u7c7b\u578b\u6570\u636e\u5220\u9664\u5f02\u5e38\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2726",children:"https://github.com/OpenAtomFoundation/pika/pull/2726"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d pkpatternmatchdel \u4e0d\u80fd\u6b63\u786e\u5220\u9664\u6389\u5bf9\u5e94\u7684 keys \u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2717",children:"https://github.com/OpenAtomFoundation/pika/pull/2717"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d ACL \u5bc6\u7801\u9a8c\u8bc1\u9519\u8bef\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2714",children:"https://github.com/OpenAtomFoundation/pika/pull/2714"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Keyspace \u547d\u4ee4\u672a\u8ba1\u7b97 Stream \u7c7b\u578b\u6570\u636e\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2705",children:"https://github.com/OpenAtomFoundation/pika/pull/2705"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u5bf9\u90e8\u5206\u547d\u4ee4\u5b9a\u5236\u5316\u5904\u7406\u903b\u8f91\uff0c\u907f\u514d\u5199 binlog \u5bfc\u81f4\u4ece\u8282\u70b9\u7684 binlog \u89e3\u6790\u5931\u8d25\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2793",children:"https://github.com/OpenAtomFoundation/pika/pull/2793"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Pika cmdID \u8d4b\u503c\u5728 Cmd \u521d\u59cb\u51fd\u6570\u4e2d\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e76\u53d1\u6784\u9020\u7684\u65f6\u5019\u51fa\u73b0\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2692",children:"https://github.com/OpenAtomFoundation/pika/pull/2692"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d ExpectedStale \u672a\u8003\u8651 String \u7c7b\u578b, \u5982\u679c\u5b58\u5728\u5df2\u7ecf\u8fc7\u671f\u7684 String \u7c7b\u578b\u7684 key, ExpectedStale \u4f1a\u8fd4\u56de\u9519\u8bef\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2682",children:"https://github.com/OpenAtomFoundation/pika/pull/2682"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Spop \u5728\u5199 binlog \u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u7ade\u6001\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2674",children:"https://github.com/OpenAtomFoundation/pika/pull/2674"})]}),"\n",(0,o.jsxs)(i.li,{children:["db instance \u8bbe\u7f6e\u4e0d\u5408\u7406\u65f6\uff0c\u7ed9\u7528\u6237\u9519\u8bef\u63d0\u793a\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2672",children:"https://github.com/OpenAtomFoundation/pika/pull/2672"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d server_stat \u4e2d\u7684\u6570\u636e\u7ade\u6001\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2671",children:"https://github.com/OpenAtomFoundation/pika/pull/2671"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u591a DB \u4e0b\u5168\u91cf\u540c\u6b65\u8d85\u65f6\u540e\u4e0d\u91cd\u8bd5\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2667",children:"https://github.com/OpenAtomFoundation/pika/pull/2667"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u591a DB \u4e0b\u5168\u91cf\u540c\u6b65\u8d85\u65f6\u540e\u4e0d\u91cd\u8bd5\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2666",children:"https://github.com/OpenAtomFoundation/pika/pull/2666"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d\u4e3b\u4ece\u540c\u6b65\u9650\u901f\u903b\u8f91\u4e2d\u91cd\u590d\u89e3\u9501\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2657",children:"https://github.com/OpenAtomFoundation/pika/pull/2657"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u53d1\u7248\u652f\u6301\u81ea\u52a8\u6253\u5305 centos7 \u548c centos8 \u5e73\u53f0\u7684\u4e8c\u8fdb\u5236\u7f16\u8bd1\u5305\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2535",children:"https://github.com/OpenAtomFoundation/pika/pull/2535"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4fee\u590d Codis \u4fa7\u7684 getrange \u547d\u4ee4\u6ca1\u6709\u8fd4\u56de\u9884\u671f\u7ed3\u679c\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2510",children:"https://github.com/OpenAtomFoundation/pika/pull/2510"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"2.3 \u63d0\u5347\u6539\u8fdb\u9879"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\u66f4\u65b0 Pika Docker Readme, \u53ef\u4ee5\u6309\u7167 Readme \u5728 Docker \u4e2d\u90e8\u7f72 Pika \u670d\u52a1\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2743",children:"https://github.com/OpenAtomFoundation/pika/pull/2743"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u4f18\u5316\u91cd\u590d\u67e5\u8be2 meta value \u5bfc\u81f4\u5f71\u54cd Pika \u670d\u52a1\u8bfb\u5199\u6027\u80fd\u7684\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2735",children:"https://github.com/OpenAtomFoundation/pika/pull/2735"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u652f\u6301\u5bf9\u66f4\u591a\u7684 RocksDB \u53c2\u6570\u8fdb\u884c\u52a8\u6001\u8c03\u6574\uff0c\u7528\u6237\u6839\u636e\u4e0d\u540c\u7684\u4e1a\u52a1\u4f7f\u7528\u573a\u666f\u8c03\u6574\u53c2\u6570\u63d0\u5347 Pika \u7684\u8bfb\u5199\u6027\u80fd\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2728",children:"https://github.com/OpenAtomFoundation/pika/pull/2728"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u5bf9 HyperLogLog \u548c String \u8fdb\u884c\u7c7b\u578b\u9694\u79bb\uff0c\u786e\u4fdd HyperLogLog \u64cd\u4f5c\u4e0e String \u64cd\u4f5c\u660e\u786e\u533a\u5206\u5f00\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2720",children:"https://github.com/OpenAtomFoundation/pika/pull/2720"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u66f4\u65b0\u4e86 PR \u6807\u9898\u9a8c\u8bc1\uff0c\u4e0d\u5141\u8bb8\u5728\u6807\u9898\u672b\u5c3e\u51fa\u73b0\u4e2d\u6587\u5b57\u7b26\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2718",children:"https://github.com/OpenAtomFoundation/pika/pull/2718"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u91cd\u6784\u4e3b\u4ece\u590d\u5236\u6a21\u5f0f slave \u8282\u70b9\u7684\u4e3b\u4ece\u540c\u6b65\u7ebf\u7a0b\u6a21\u578b\uff0c\u5c3d\u53ef\u80fd\u51cf\u5c11 binlog \u6d88\u8d39\u963b\u585e\u95ee\u9898\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2638",children:"https://github.com/OpenAtomFoundation/pika/pull/2638"})]}),"\n",(0,o.jsxs)(i.li,{children:["\u65b0\u589e RocksDB Compaction \u7b56\u7565\u52a8\u6001\u8c03\u6574\u53c2\u6570\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u8c03\u6574 Compaction \u7b56\u7565\uff0c\u964d\u4f4e Compaction \u64cd\u4f5c\u5bf9\u670d\u52a1\u6027\u80fd\u7684\u635f\u8017\n",(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2538",children:"https://github.com/OpenAtomFoundation/pika/pull/2538"})]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"2.4 \u53d1\u7248 tag"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/releases/tag/v4.0.0",children:"https://github.com/OpenAtomFoundation/pika/releases/tag/v4.0.0"}),"\n3 \u793e\u533a\n\u611f\u8c22\u6240\u6709\u4e3a v4.0.0 \u505a\u51fa\u8d21\u732e\u7684\u793e\u533a\u6210\u5458\uff0c\u5305\u62ec issue/PR \u63d0\u4ea4\u8005\u3001\u4ee3\u7801 reviewer \u3010\u6392\u540d\u4e0d\u5206\u5148\u540e\uff0c\u4f9d\u636e\u5b57\u6bcd\u5e8f\u5217\u3011\uff1a"]}),"\n",(0,o.jsx)(i.p,{children:"AlexStocks"}),"\n",(0,o.jsx)(i.p,{children:"baerwang"}),"\n",(0,o.jsx)(i.p,{children:"chejinge"}),"\n",(0,o.jsx)(i.p,{children:"cheniujh"}),"\n",(0,o.jsx)(i.p,{children:"chienguo"}),"\n",(0,o.jsx)(i.p,{children:"guangkun123"}),"\n",(0,o.jsx)(i.p,{children:"gukj-spel"}),"\n",(0,o.jsx)(i.p,{children:"longfar-ncy"}),"\n",(0,o.jsx)(i.p,{children:"lqxhub"}),"\n",(0,o.jsx)(i.p,{children:"luky116"}),"\n",(0,o.jsx)(i.p,{children:"Mixficsol"}),"\n",(0,o.jsx)(i.p,{children:"saz97"}),"\n",(0,o.jsx)(i.p,{children:"wangshao1"}),"\n",(0,o.jsx)(i.p,{children:"PikiwiDB (Pika) \u5f00\u6e90\u793e\u533a\u70ed\u70c8\u6b22\u8fce\u60a8\u7684\u53c2\u4e0e\u548c\u652f\u6301\u3002\u5982\u679c\u60a8\u6709\u4efb\u4f55\u95ee\u9898\u3001\u610f\u89c1\u6216\u5efa\u8bae\uff0c\u8bf7\u626b\u7801\u6dfb\u52a0 PikiwiDB \u5c0f\u52a9\u624b\u3010\u5fae\u4fe1\u53f7: PikiwiDB\u3011\u4e3a\u597d\u53cb\uff0c\u5b83\u4f1a\u62c9\u60a8\u52a0\u5165\u5b98\u65b9\u5fae\u4fe1\u7fa4\u3002"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"2024-07-08-PikiwiDB(Pika)-4.0.0-connect",src:t(3654).A+"",width:"747",height:"431"})})]})}function c(n={}){const{wrapper:i}={...(0,e.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},3654:(n,i,t)=>{t.d(i,{A:()=>o});const o=t.p+"assets/images/2024-07-08-PikiwiDB(Pika)-4.0.0-connect-c43aca0eeeb5cd09cc60b55f9a3df4e5.png"},9805:(n,i,t)=>{t.d(i,{A:()=>o});const o=t.p+"assets/images/2024-07-08-PikiwiDB(Pika)-4.0.0-key-357e46564ca61e525f598aa7ac52b886.png"},8453:(n,i,t)=>{t.d(i,{R:()=>l,x:()=>s});var o=t(6540);const e={},p=o.createContext(e);function l(n){const i=o.useContext(p);return o.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:l(n.components),o.createElement(p.Provider,{value:i},n.children)}}}]);