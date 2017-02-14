# Date Handling
 ~ Baixe via bower 
```javascript
bower install date-handling --save
```

 ~ Adicione o arquivo no seu HTML
```html
<script src="bower_components/date-handling/dist/date-handling.min.js"></script>
```

 ~ Uso
```javascript
var someDate = new Date();
var expirationDate = someDate.handlingMinutes(10);
var previous = someDate.handlingMinutes(-5);
console.log(expirationDate);
console.log(previous);
```

 ~ Métodos
```
 handlingDays(NUMBER);
 handlingSeconds(NUMBER);
 handlingMinutes(NUMBER);
 handlingHours(NUMBER);
 handlingMonths(NUMBER);
```
