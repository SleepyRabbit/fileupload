这是一个使用node.js来实现控制文件上传的demo

index.html
---
index.html为前端网页，最主要的内容为：

```html
<form action="/upload" method="post" enctype="multipart/form-data">
    <input name="avar" multiple type="file" />
    <!--<input name="avar" type="file" />-->
    <input type="submit">
</form>
```

这段代码实现以下效果：
<form action="/upload" method="post" enctype="multipart/form-data">
    <input name="avar" multiple type="file" />
    <!--<input name="avar" type="file" />-->
    <input type="submit">
</form>

server.js
---
server.js是node.js代码，它起到两方面的作用，一个是作为路由，另一个是使用epress的文件上传中间件Multer来处理上传的文件。
