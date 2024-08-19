"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[9145],{3692:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(4848),t=n(8453);const l={title:"\u7ebf\u7a0b\u6a21\u578b",sidebar_position:1},o=void 0,s={id:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u7ebf\u7a0b\u6a21\u578b/index",title:"\u7ebf\u7a0b\u6a21\u578b",description:"pika\u4f7f\u7528\u7684\u662f\u591a\u7ebf\u7a0b\u6a21\u578b\uff0c\u4f7f\u7528\u591a\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u6765\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\uff0c\u7531\u5e95\u5c42blackwidow\u5f15\u64ce\u6765\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\uff0c\u7ebf\u7a0b\u5206\u4e3a12\u79cd\uff1a",source:"@site/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u7ebf\u7a0b\u6a21\u578b/index.md",sourceDirName:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u7ebf\u7a0b\u6a21\u578b",slug:"/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u7ebf\u7a0b\u6a21\u578b/",permalink:"/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u7ebf\u7a0b\u6a21\u578b/",draft:!1,unlisted:!1,editUrl:"https://atomgit.com/zouxiangneihe/website/tree/master/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u7ebf\u7a0b\u6a21\u578b/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7ebf\u7a0b\u6a21\u578b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6574\u4f53\u6280\u672f\u67b6\u6784",permalink:"/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u6574\u4f53\u6280\u672f\u67b6\u6784/"},next:{title:"\u9501\u7684\u5e94\u7528",permalink:"/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u9501\u7684\u5e94\u7528/"}},a={},c=[];function d(e){const i={li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"pika\u4f7f\u7528\u7684\u662f\u591a\u7ebf\u7a0b\u6a21\u578b\uff0c\u4f7f\u7528\u591a\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u6765\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\uff0c\u7531\u5e95\u5c42blackwidow\u5f15\u64ce\u6765\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\uff0c\u7ebf\u7a0b\u5206\u4e3a12\u79cd\uff1a"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"PikaServer\uff1a\u4e3b\u7ebf\u7a0b"}),"\n",(0,r.jsx)(i.li,{children:"DispatchThread\uff1a\u76d1\u542c1\u4e2a\u7aef\u53e3\uff0c\u63a5\u6536\u7528\u6237\u8fde\u63a5\u8bf7\u6c42"}),"\n",(0,r.jsx)(i.li,{children:"WorkerThread\uff1a\u5b58\u5728\u591a\u4e2a(\u7528\u6237\u914d\u7f6e)\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u91cc\u6709\u82e5\u5e72\u4e2a\u7528\u6237\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\uff0c\u8d1f\u8d23\u63a5\u6536\u7528\u6237\u547d\u4ee4\uff0c\u7136\u540e\u5c06\u547d\u4ee4\u5c01\u88c5\u6210\u4e00\u4e2aTask\u6254\u5230ThreadPool\u6267\u884c\uff0c\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u7531\u8be5\u7ebf\u7a0b\u5c06reply\u8fd4\u56de\u7ed9\u7528\u6237"}),"\n",(0,r.jsx)(i.li,{children:"ThreadPool\uff1a\u7ebf\u7a0b\u6c60\u4e2d\u7684\u7ebf\u7a0b\u6570\u91cf\u7531\u7528\u6237\u914d\u7f6e\uff0c\u6267\u884cWorkerThread\u8c03\u5ea6\u8fc7\u6765\u7684Task, Task\u7684\u5185\u5bb9\u4e3b\u8981\u662f\u5199DB\u548c\u5199Binlog"}),"\n",(0,r.jsx)(i.li,{children:"PikaAuxiliaryThread\uff1a\u8f85\u52a9\u7ebf\u7a0b\uff0c\u5904\u7406\u540c\u6b65\u8fc7\u7a0b\u4e2d\u72b6\u6001\u673a\u72b6\u6001\u7684\u5207\u6362\uff0c\u4e3b\u4ece\u4e4b\u95f4\u5fc3\u8df3\u7684\u53d1\u9001\u4ee5\u53ca\u8d85\u65f6\u68c0\u67e5"}),"\n",(0,r.jsx)(i.li,{children:"PikaReplClient\uff1a\u672c\u8d28\u4e0a\u662f\u4e00\u4e2aEpoll\u7ebf\u7a0b(\u4e0e\u5176\u4ed6Pika\u5b9e\u4f8b\u7684PikaReplServer\u8fdb\u884c\u901a\u4fe1)\u52a0\u4e0a\u4e00\u4e2a\u7531\u82e5\u5e72\u7ebf\u7a0b\u7ec4\u6210\u7684\u7ebf\u7a0b\u6570\u7ec4(\u5f02\u6b65\u7684\u5904\u7406\u5199Binlog\u4ee5\u53ca\u5199DB\u7684\u4efb\u52a1)"}),"\n",(0,r.jsx)(i.li,{children:"PikaReplServer\uff1a\u672c\u8d28\u4e0a\u662f\u4e00\u4e2aEpoll\u7ebf\u7a0b(\u4e0e\u5176\u4ed6Pika\u5b9e\u4f8b\u7684PikaReplClient\u8fdb\u884c\u901a\u4fe1)\u52a0\u4e0a\u4e00\u4e2a\u7531\u82e5\u5e72\u7ebf\u7a0b\u7ec4\u6210\u7684\u7ebf\u7a0b\u6c60(\u5904\u7406\u540c\u6b65\u7684\u8bf7\u6c42\u4ee5\u53ca\u6839\u636e\u4ece\u5e93\u8fd4\u56de\u7684Ack\u66f4\u65b0Binlog\u6ed1\u7a97)"}),"\n",(0,r.jsx)(i.li,{children:"KeyScanThread\uff1a\u5728\u8fd9\u4e2a\u7ebf\u7a0b\u4e2d\u6267\u884cinfo keyspace 1\u89e6\u53d1\u7684\u7edf\u8ba1Key\u6570\u91cf\u7684\u4efb\u52a1"}),"\n",(0,r.jsx)(i.li,{children:"BgSaveThread\uff1a\u5bf9\u6307\u5b9a\u7684DB\u8fdb\u884cDump\u64cd\u4f5c\uff0c\u4ee5\u53ca\u5168\u540c\u6b65\u7684\u65f6\u5019\u53d1\u9001Dump\u6570\u636e\u5230\u4ece\u5e93\uff08\u5bf9\u4e00\u4e2aDB\u6267\u884c\u5168\u540c\u6b65\u662f\u5148\u540e\u5411Thread\u4e2d\u6254\u4e86BgSave\u4ee5\u53caDBSync\u4e24\u4e2a\u4efb\u52a1\u4ece\u800c\u4fdd\u8bc1\u987a\u5e8f)"}),"\n",(0,r.jsx)(i.li,{children:"PurgeThread\uff1a\u7528\u4e8e\u6e05\u7406\u8fc7\u671f\u7684Binlog\u6587\u4ef6"}),"\n",(0,r.jsx)(i.li,{children:"PubSubThread\uff1a\u7528\u4e8e\u652f\u6301PubSub\u76f8\u5173\u529f\u80fd"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var r=n(6540);const t={},l=r.createContext(t);function o(e){const i=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);