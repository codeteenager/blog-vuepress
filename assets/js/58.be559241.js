(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{470:function(a,t,n){"use strict";n.r(t);var o=n(30),s=Object(o.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"tensorflow学习之anaconda开发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow学习之anaconda开发环境搭建"}},[a._v("#")]),a._v(" tensorflow学习之Anaconda开发环境搭建")]),a._v(" "),t("p",[a._v("tensorflow的开发环境搭建有很多种，例如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("+ pip\n+ docker\n+ VirtualEnv\n+ Anaconda\n+ 源代码编译\n")])])]),t("p",[a._v("在这里为了工具包的方便管理，我选择使用Anaconda搭建。")]),a._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("ul",[t("li",[a._v("下载并安装Anaconda")]),a._v(" "),t("li",[a._v("下载并安装tensorflow")]),a._v(" "),t("li",[a._v("下载并安装notebook")])]),a._v(" "),t("h2",{attrs:{id:"下载anaconda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载anaconda"}},[a._v("#")]),a._v(" 下载Anaconda")]),a._v(" "),t("h3",{attrs:{id:"anaconda是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anaconda是什么"}},[a._v("#")]),a._v(" Anaconda是什么？")]),a._v(" "),t("p",[a._v("Anaconda 是一种Python语言的免费增值开源发行版，用于进行大规模数据处理, 预测分析, 和科学计算, 致力于简化包的管理和部署。Anaconda使用软件包管理系统Conda进行包管理。")]),a._v(" "),t("p",[a._v("在 https://www.anaconda.com/download/#macos 网址中下载Anaconda。")]),a._v(" "),t("h3",{attrs:{id:"conda是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conda是什么"}},[a._v("#")]),a._v(" Conda是什么？")]),a._v(" "),t("p",[a._v("conda 是开源包（packages）和虚拟环境（environment）的管理系统。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("packages 管理： 可以使用 conda 来安装、更新 、卸载工具包 ，并且它更关注于数据科学相关的工具包。在安装 anaconda 时就预先集成了像 Numpy、Scipy、 pandas、Scikit-learn 这些在数据分析中常用的包。另外值得一提的是，conda 并不仅仅管理Python的工具包，它也能安装非python的包。比如在新版的 Anaconda 中就可以安装R语言的集成开发环境 Rstudio。")])]),a._v(" "),t("li",[t("p",[a._v("虚拟环境管理： 在conda中可以建立多个虚拟环境，用于隔离不同项目所需的不同版本的工具包，以防止版本上的冲突。对纠结于 Python 版本的同学们，我们也可以建立 Python2 和 Python3 两个环境，来分别运行不同版本的 Python 代码。")])])]),a._v(" "),t("h3",{attrs:{id:"anaconda的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anaconda的优点"}},[a._v("#")]),a._v(" Anaconda的优点")]),a._v(" "),t("p",[a._v("Anaconda通过管理工具包、开发环境、Python版本，大大简化了你的工作流程。不仅可以方便地安装、更新、卸载工具包，而且安装时能自动安装相应的依赖包，同时还能使用不同的虚拟环境隔离不同要求的项目。")]),a._v(" "),t("h3",{attrs:{id:"anaconda内置多项应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anaconda内置多项应用"}},[a._v("#")]),a._v(" Anaconda内置多项应用")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Anaconda Navigator：用于管理工具包和环境的图形用户界面，众多管理命令也可以在 Navigator 中手工实现")])]),a._v(" "),t("li",[t("p",[a._v("Jupyter notebook ：基于web的交互式计算环境，可以编辑易于人们阅读的文档，用于展示数据分析的过程")])]),a._v(" "),t("li",[t("p",[a._v("qtconsole ：一个可执行 IPython 的仿终端图形界面程序，相比 Python Shell 界面，qtconsole 可以直接显示代码生成的图形，实现多行代码输入执行，以及内置许多有用的功能和函数")])]),a._v(" "),t("li",[t("p",[a._v("spyder ：一个使用Python语言、跨平台的、科学运算集成开发环境")])])]),a._v(" "),t("h2",{attrs:{id:"安装anaconda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装anaconda"}},[a._v("#")]),a._v(" 安装Anaconda")]),a._v(" "),t("p",[a._v("打开Anaconda安装包安装，一直点继续，直到安装完成。\n"),t("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tNbRwgy1fucl1itbo4j30yi0oi775.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"使用anaconda-navigator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用anaconda-navigator"}},[a._v("#")]),a._v(" 使用Anaconda Navigator")]),a._v(" "),t("p",[a._v("Anaconda安装后，可以从菜单中看到它包含几个应用程序，其中Anaconda Navigator是这几个程序的导航入口。\nAnaconda Navigator是Anaconda发行包中包含的桌面图形界面，可以用来方便地启动应用、方便的管理conda包、环境和频道，不需要使用命令行的命令。Navigator可以从Anaconda Cloud或本地Anaconda仓库中搜索包。提供了Windwos、maxOS和Linux版本。Anaconda Navigator主界面如下：\n"),t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tNbRwgy1fug1ciffynj31kw0w2143.jpg",alt:""}})]),a._v(" "),t("p",[a._v("在左边菜单栏中可以看到四个选项，一般常用的是Home和Environments。Environments是你搭建开发环境的地方，你可以在Environments中创建一个开发环境，然后下载所需要的包即可。例如：")]),a._v(" "),t("h3",{attrs:{id:"创建开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建开发环境"}},[a._v("#")]),a._v(" 创建开发环境")]),a._v(" "),t("p",[a._v("点击左下角create，弹出创建开发环境框，输入环境名和选择python类型即可。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tNbRwgy1fug249lchaj30hw07smxg.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNbRwgy1fug25ehdrkj30w40mcjuf.jpg",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"下载tensorflow包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载tensorflow包"}},[a._v("#")]),a._v(" 下载tensorflow包")]),a._v(" "),t("p",[a._v("搜索tensorflow包，勾选要下载的包，然后点击右下角Apply即可。\n"),t("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNbRwgy1fug372d8e6j31fe13udj6.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Home是你搭建完开发环境后的工作台，在这里可以点击notebook来编写程序。例如：")]),a._v(" "),t("h3",{attrs:{id:"选择开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择开发环境"}},[a._v("#")]),a._v(" 选择开发环境")]),a._v(" "),t("p",[a._v("在Home工作台中，选择你要使用的工作台。\n"),t("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tNbRwgy1fug38c2hnvj310y0jajux.jpg",alt:""}})]),a._v(" "),t("p",[a._v("在工作台中你可以看到多种应用。例如：")]),a._v(" "),t("ul",[t("li",[a._v("Jupyter Notebook")]),a._v(" "),t("li",[a._v("Orange App")]),a._v(" "),t("li",[a._v("QTConsole")]),a._v(" "),t("li",[a._v("Glueviz")]),a._v(" "),t("li",[a._v("Spyder")]),a._v(" "),t("li",[a._v("RStudio")])]),a._v(" "),t("p",[a._v("如果应用没有安装，可以点击应用的Install即可安装。如果已安装，点击Launch即可运行。\n"),t("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNbRwgy1fug3frs03ej31kw0yt47g.jpg",alt:""}})]),a._v(" "),t("p",[a._v("在这里我们点击运行Jupyter notebook来编写我们的tensorflow程序。")]),a._v(" "),t("h2",{attrs:{id:"jupyter-notebook是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jupyter-notebook是什么"}},[a._v("#")]),a._v(" Jupyter notebook是什么？")]),a._v(" "),t("p",[a._v("Jupyter notebook 是一种 Web 文档。写过项目的都知道，我们在编译器写代码，然后又去打开word或者其他的文本编辑工具去写开发文档，而且调试也不是非常的方便，是不是感觉特麻烦。 Jupyte的出现就解决我们的各种麻烦，能够让我们把文本，图像和代码全部组合在一个文档中，而且，调试也特别的方便，大大的提高我们开发的效率。")]),a._v(" "),t("p",[a._v("以上内容是我们需要搭建Anaconda开发环境的全部内容。搭建完成后，你就可以编写tensorflow的相关程序啦。")])])}),[],!1,null,null,null);t.default=s.exports}}]);