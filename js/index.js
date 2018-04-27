window.onload=function(){
  
  var oBtn = document.getElementById('btn');
          oBtn.onclick = function(e){

          var vname = document.getElementById('name').value;
          var vschool = document.getElementById('school').value;
          var vSex = document.getElementById('sex').value;
          var vclass = document.getElementById('class').value;
          var vQQ = document.getElementById('QQ').value;
          var vPhone = document.getElementById('Phone').value;
          
          if ((vname=="")||(vschool=="")||(vSex=="")||(vclass=="")||(vQQ=="")||(vPhone=="")) {
            alert("请您完善信息");
          }else{
            var data= "name="+vname+"&school="+vschool+"&sex="+vSex+"&class="+vclass+"&QQ="+vQQ+"&phone="+vPhone;
            
              ajax('POST','/api/add',function(str){
                  alert("您已提交成功");
              },function(str){
                  alert(str+"提交失败，请重新提交");
              },data);
              document.getElementById('name').value = '';
              document.getElementById('school').value = '';
              document.getElementById('sex').value = '';
              document.getElementById('class').value = '';
              document.getElementById('QQ').value = '';
              document.getElementById('Phone').value = '';
          }
          
          }
}
