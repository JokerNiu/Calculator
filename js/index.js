$(function(){
	var btn= $('.col-row .button')
	var screenValue = '0';
	var result= 0;
	 var prevEntry = 0;
    var operation = null;
	updataScreenVlaue(result)
	btn.on('click',function(){
		$(this).css({'backgroundColor':'orange','translateY':'-5px'}).mouseleave(function(){
			$(this).css("backgroundColor",'')
		})
		 
		var btn_val = $(this).html();
		console.log(btn_val)
		if(btn_val == 'C'){
			result =0;
			screenValue =0;
		}else if(btn_val ==='back'){
			screenValue = 0;
		}else if(isNumber(btn_val)){
			if(btn_val ==='0')  screenValue =btn_val;
			else{
				screenValue =screenValue + btn_val
			}
		}else if (isOperator(btn_val)) {
           prevEntry = parseFloat(screenValue);
           operation = btn_val;
           screenValue = ''; 
        }
		else if(btn_val === 'sqrt'){
			console.log(screenValue)
			screenValue = Math.sqrt(screenValue)
		}else if (btn_val === '1/x') {
      screenValue = 1 / screenValue;
    } else if (btn_val === 'pi') {
      screenValue = Math.PI;
    } else if (btn_val === '=') {
      screenValue = operate(prevEntry, screenValue, operation);
      operation = null;
    }
		updataScreenVlaue(screenValue)
	})
	})
// 显示界面更新
updataScreenVlaue = function (dvalue){
	var dvalue= dvalue.toString()
	      // console.log(value)
		$('.screen').html(dvalue.substring(0, 10))
}
// 判断点击的是不是数字
isNumber = function(value) {
  return !isNaN(value);
}
// 判断点击的是不是运算符
isOperator = function(value) {
  return value === '/' || value === '*' || value === '+' || value === '-';
};
// 各个运算符的具体操作 传入三个参数 屏幕上出现的数值 ，需要操作的数值 ，操作的运算符
operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return a / b;
}