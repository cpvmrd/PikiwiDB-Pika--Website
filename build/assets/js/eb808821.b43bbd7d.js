"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[1661],{9201:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(4848),r=i(8453);const t={title:"Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4",sidebar_position:2},a=void 0,o={id:"\u6027\u80fd\u4e0e\u4f18\u5316/Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4/index",title:"Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4",description:"Redis \u662f\u540e\u7aef\u5e38\u7528\u7684\u952e\u503c\u6570\u636e\u5e93\u3002Pika \u662f 360 \u51fa\u54c1\u7684\u4e00\u6b3e\u4e0e Redis \u534f\u8bae\u51e0\u4e4e\u517c\u5bb9\u7684\u6570\u636e\u5e93\u3002\u4e0e Redis \u4e0d\u540c\u7684\u662f\uff0cPika \u57fa\u4e8e\u786c\u76d8\uff0c\u4f7f\u7528 RocksDB \u4f5c\u4e3a\u5f15\u64ce\uff0c\u4ece\u5bb9\u91cf\u4e0a\u6765\u8bf4\uff0c\u6bd4\u57fa\u4e8e\u5185\u5b58\u7684 Redis \u5927\u4e86\u4e0d\u5c11\uff0c\u800c\u4e14\u5728\u6027\u80fd\u4e0a\u4e5f\u80fd\u6ee1\u8db3\u4e00\u822c\u9700\u6c42\u3002",source:"@site/docs/\u6027\u80fd\u4e0e\u4f18\u5316/Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4/index.md",sourceDirName:"\u6027\u80fd\u4e0e\u4f18\u5316/Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4",slug:"/\u6027\u80fd\u4e0e\u4f18\u5316/Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4/",permalink:"/docs/\u6027\u80fd\u4e0e\u4f18\u5316/Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4/",draft:!1,unlisted:!1,editUrl:"https://atomgit.com/zouxiangneihe/website/tree/master/docs/\u6027\u80fd\u4e0e\u4f18\u5316/Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Redis \u4e0e Pika scan \u6027\u80fd\u5bf9\u6bd4",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pika \u5185\u5b58\u4f7f\u7528",permalink:"/docs/\u6027\u80fd\u4e0e\u4f18\u5316/Pika \u5185\u5b58\u4f7f\u7528/"},next:{title:"Pika 3.5 \u53c2\u6570\u4f18\u5316\u624b\u518c",permalink:"/docs/\u6027\u80fd\u4e0e\u4f18\u5316/Pika 3.5 \u53c2\u6570\u4f18\u5316\u624b\u518c/"}},d={},c=[];function u(n){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Redis \u662f\u540e\u7aef\u5e38\u7528\u7684\u952e\u503c\u6570\u636e\u5e93\u3002Pika \u662f 360 \u51fa\u54c1\u7684\u4e00\u6b3e\u4e0e Redis \u534f\u8bae\u51e0\u4e4e\u517c\u5bb9\u7684\u6570\u636e\u5e93\u3002\u4e0e Redis \u4e0d\u540c\u7684\u662f\uff0cPika \u57fa\u4e8e\u786c\u76d8\uff0c\u4f7f\u7528 RocksDB \u4f5c\u4e3a\u5f15\u64ce\uff0c\u4ece\u5bb9\u91cf\u4e0a\u6765\u8bf4\uff0c\u6bd4\u57fa\u4e8e\u5185\u5b58\u7684 Redis \u5927\u4e86\u4e0d\u5c11\uff0c\u800c\u4e14\u5728\u6027\u80fd\u4e0a\u4e5f\u80fd\u6ee1\u8db3\u4e00\u822c\u9700\u6c42\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u77e5\u9053\uff0c\u5728 Redis \u4e2d\uff0c",(0,s.jsx)(e.code,{children:"keys *"})," \u8fd9\u4e2a\u64cd\u4f5c\u4ec5\u9650\u4e8e\u5728\u672c\u5730\u8c03\u8bd5\u4f7f\u7528\uff0c\u5343\u4e07\u4e0d\u80fd\u7528\u4e8e\u7ebf\u4e0a\uff0c\u56e0\u4e3a\u8fd9\u4f1a \u904d\u5386\u6574\u4e2a\u6570\u636e\u5e93\uff0c\u53ef\u80fd\u5f15\u8d77\u6570\u636e\u5e93\u957f\u65f6\u95f4\u65e0\u54cd\u5e94\uff0c\u751a\u81f3\u5d29\u6e83\u3002\u5728\u7ebf\u4e0a\u670d\u52a1\u5668\uff0c\u5982\u679c\u60f3\u8981\u67e5\u627e\u67d0\u4e2a\u6a21\u5f0f \u7684\u952e\uff0c\u53ef\u4ee5\u4f7f\u7528 scan \u547d\u4ee4\u3002\u6bd4\u5982\u8bf4\u8981\u67e5\u627e ",(0,s.jsx)(e.code,{children:"user:"})," \u524d\u7f00\u7684\u6240\u6709\u952e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"scan 0 user:*"})," \u547d\u4ee4\u3002\u7136\u800c\u5982\u679c\u670d\u52a1\u5668\u4e0a\u7684\u952e\u975e\u5e38\u591a\u7684\u8bdd\uff0c\u867d\u7136\u4e0d\u4f1a\u5361\u6b7b\u670d\u52a1\u5668\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u8fc7\u7a0b\u4f9d\u7136\u4f1a\u5f88\u6f2b\u957f\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"Redis \u662f\u4f7f\u7528 hash table \u5b9e\u73b0\u7684\uff0c\u6240\u4ee5 scan \u547d\u4ee4\u5176\u5b9e\u4e5f\u662f\u904d\u5386\u6240\u6709\u952e\uff0c\u62ff\u5230\u6bcf\u4e2a\u952e\u518d\u505a\u8fc7\u6ee4\uff0c\u800c \u4e0d\u80fd\u76f4\u63a5\u8bfb\u53d6\u7b26\u5408\u5bf9\u5e94 pattern \u7684\u952e\u3002\u6211\u4eec\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u9a8c\u8bc1\u4e00\u4e0b redis scan \u7684\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from redis import Redis\nfrom uuid import uuid4\nimport time\n\ndef gen(r):\n    for i in range(10000000):\n        r.set(str(uuid4()), 1)\n    r.set("user:1", "bar")\n\ndef scan(r):\n    start = time.time()\n    for key in r.scan_iter("user:*"):\n        print("user=%s" % r.get(key).decode())\n        duration = time.time() - start\n        print("duration for finding user is %.3f" % duration)\n    duration = time.time() - start\n    print("duration for full scan is %.3f" % duration)\n\nif __name__ == "__main__":\n    import sys\n    port = int(sys.argv[1])\n    r = Redis(port=port)\n    gen(r)\n    scan(r)\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9996\u5148\u63d2\u5165\u4e00\u5343\u4e07\u4e2a\u968f\u673a\u6570\u636e\uff0c\u7136\u540e\u4ece\u4e2d\u67e5\u627e\u6211\u4eec\u7684\u76ee\u6807\u6570\u636e\u3002\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"-> % python3 rb.py 6379\nuser=bar\nduration for finding user is 80.145\nduration for full scan is 180.936\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u548c\u6211\u4eec\u7684\u9884\u671f\u57fa\u672c\u662f\u76f8\u7b26\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4 Redis \u662f\u9996\u5148\u904d\u5386\u7136\u540e\u518d\u505a\u8fc7\u6ee4\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u5bf9 Pika \u505a\u76f8\u540c\u7684\u5b9e\u9a8c\uff0cPika \u9ed8\u8ba4\u4f7f\u7528 9221 \u7aef\u53e3\uff0c\u6211\u4eec\u53ea\u9700\u8981\u628a\u7aef\u53e3\u6362\u4e00\u4e0b\u5c31\u597d\u4e86\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"-> % python3 rb.py 9221\nuser=bar\nduration for finding user is 0.002\nduration for full scan is 0.003\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7ed3\u679c\u662f\u4ee4\u4eba\u9707\u60ca\u7684\uff01Pika \u51e0\u4e4e\u5728\u77ac\u95f4\u5c31\u5b8c\u6210\u4e86\u904d\u5386\u3002\u539f\u56e0\u5728\u4e8e Pika \u4f7f\u7528\u4e86 RocksDB\uff0c\u800c RocksDB \u652f\u6301 Range \u64cd\u4f5c\u3002RocksDB \u4e2d\u7684\u6570\u636e\u90fd\u662f\u6709\u5e8f\u7684\uff0c\u6240\u4ee5\u67e5\u627e\u8d77\u6765\u5c31\u4e0d\u9700\u8981 O(n) \u4e86\uff0c\u53ea\u9700\u8981\u4e8c\u5206\u67e5\u627e\uff0c \u4e5f\u5c31\u662f O(logN) \u5373\u53ef\u3002"})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function a(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);