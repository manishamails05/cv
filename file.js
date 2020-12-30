
function openNav_a() {
             
document.getElementById("sidebar").style.width = "650px";
  
document.getElementById("sidebar").style.marginLeft="100px";
 document.getElementById("circle_b").style.opacity="0.2";
document.getElementById("circle_c").style.opacity="0.2";
    
}


function closeNav_a()
{
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("circle_b").style.opacity="0.9";
    document.getElementById("circle_c").style.opacity="0.9";
}
function openNav_b() 
{
             
  document.getElementById("sidebar_b").style.width = "650px";
 document.getElementById("sidebar_b").style.marginLeft="150px";
 
document.getElementById("circle_a").style.opacity="0.2";
document.getElementById("circle_c").style.opacity="0.2";
    
}
function closeNav_b()
{
    document.getElementById("sidebar_b").style.width = "0px";
    document.getElementById("circle_a").style.opacity="0.9";
    document.getElementById("circle_c").style.opacity="0.9";
}
function openNavCourse_a() {
             
document.getElementById("sidebarCourse").style.width = "650px";
  document.getElementById("sidebarCourse").style.marginTop = "50px";
document.getElementById("sidebarCourse").style.marginLeft="90px";
 document.getElementById("circleCourse_b").style.opacity="0.2";
document.getElementById("circleCourse_c").style.opacity="0.2";
    
}
function closeNavCourse_a()
{
    document.getElementById("sidebarCourse").style.width = "0px";
    document.getElementById("circleCourse_b").style.opacity="0.9";
    document.getElementById("circleCourse_c").style.opacity="0.9";
}
function openNavCourse_b()
{
    document.getElementById("sidebarCourse_b").style.width = "650px";
 document.getElementById("sidebarCourse_b").style.marginLeft="150px";
 document.getElementById("sidebarCourse_b").style.marginTop = "50px";
document.getElementById("circleCourse_a").style.opacity="0.2";
document.getElementById("circleCourse_c").style.opacity="0.2";
}
function closeNavCourse_b()
{
     document.getElementById("sidebarCourse_b").style.width = "0px";
    document.getElementById("circleCourse_a").style.opacity="0.9";
    document.getElementById("circleCourse_c").style.opacity="0.9";
}
function openNavCourse_c()
{
    document.getElementById("sidebarCourse_c").style.width = "650px";
 document.getElementById("sidebarCourse_c").style.marginLeft="150px";
 document.getElementById("sidebarCourse_c").style.marginTop = "50px";
document.getElementById("circleCourse_a").style.opacity="0.2";
document.getElementById("circleCourse_b").style.opacity="0.2";
}
function closeNavCourse_c()
{
     document.getElementById("sidebarCourse_c").style.width = "0px";
    document.getElementById("circleCourse_a").style.opacity="0.9";
    document.getElementById("circleCourse_b").style.opacity="0.9";
}


        $( document ).ready(function()
        {

         console.log( "ready!" );

            $(".btn").click( function(event)
           {
             alert('button clicked');
             event.preventDefault()
             console.log("button clicked"); 
             var name=$('.fname').val();
             
             var email=$('.email').val();
             var grade=$('.grade').val();
             var message=$('.message').val();
             var statusElem=$('.status');
             statusElem.empty();
             if(name.length > 2)
                {
                    statusElem.append('<div> Name is valid </div>');
                }
                else
                {
                    statusElem.append('<div> Name is not valid </div>');
                }
                 if(email.length>5 && email.includes('@') && email.includes('.') && email.includes(''))
                 {
                    console.log("email is valid");
                    statusElem.append('<div> Email is valid </div>');
                 }
                else
                {
                     statusElem.append('<div> Email is not valid </div>');
                    console.log('email is not valid');
                }
                 if(grade.length==1 && grade != 0 )
                 {
                    statusElem.append('<div> Grade is valid </div>');
                 }
                 else
                 {
                    statusElem.append('<div>Grade is not valid </div>');
                 }
                if(message.length>10)
                {
                    statusElem.append('<div> Message is valid </div>');
                }
                else
                {
                    statusElem.append('<div> Meassage is not valid </div>');
                }
                
            }
        );

        });
            function sendMail(params)
        	{
        		var tempParams={
        			from_name:document.getElementById("fromName").value,
        			to_name:document.getElementById("toName").value,
        			message: document.getElementById("msg").value,
        		}
        		emailjs.send('service_t5dba5f','template_a4f7vpc',tempParams,'user_o5NOP5fWILbkSKa5mW5HB')
        		.then(function (response )
					{
  					console.log('success',response.status);
                    },function(error) 
                    {
                        console.log('FAILED...', error);
                    }
                    );
            }
        			
        	
        
