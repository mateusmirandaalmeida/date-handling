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
console.log(someDate.handlingHours(10));
console.log(someDate.handlingDays(-5).handlingSeconds(10).handlingMonths(2));
```

 ~ Métodos
```
 handlingDays(NUMBER); // MANIPULA OS DIAS DE UMA DATA, PARA EXEMPLO 2 OU -2
 handlingSeconds(NUMBER); // MANIPULA OS SEGUNDOS DE UMA DATA, PARA EXEMPLO 20 OU -20
 handlingMinutes(NUMBER); // MANIPULA OS MINUTOS DE UMA DATA, PARA EXEMPLO 10 OU -10
 handlingHours(NUMBER); // MANIPULA AS HORAS DE UMA DATA, PARA EXEMPLO 3 OU -3
 handlingMonths(NUMBER); // MANIPULA OS MESES DE UMA DATA, PARA EXEMPLO 5 OU -5
```
# Desenvolvimento
 ~ Baixe as dependencias de dev
 ```
  npm install
 ```
 ~ Começe a desenvolver executando:
 ```
  npm run dev
 ```
 ~ Gere o minificado de dist executando:
 ```
  npm run prod
 ```
