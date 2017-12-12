var iteration=0
var iteration2=0
$(document).ready(function(){


    $("button[class='ideacreate']").click(function() {


        var ideaprompt=prompt("What is your idea?");
        var itemselect="#item"
        var item=(itemselect+iteration)

        if (ideaprompt!=null ) {  

            $(item).html(ideaprompt)
        } else {
            $(item).remove()
        }

        iteration++;


    })

    $("button[class='taskcreate']").click(function() {

        var taskprompt=prompt("What is your task?");
        var taskselect="#button"
        var task=(taskselect+iteration2)
        var button="button"+iteration2
        if (taskprompt!=null ) {  
            $(task).html("" +
               taskprompt+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
                "<button type="+task+" class='btn btn-default' data-toggle='modal' data-target='#myModal'><span class='glyphicon glyphicon-cog'></span></button>"+
                "&nbsp&nbsp&nbsp&nbsp"+
                " <button type='button' id=close"+button +" class='close'  <span aria-hidden='true'>&times;</span></button>")

            $(task).css("z-index","1")
        } else {
                $(task).remove()
        }

;
        iteration2++;

    })




    $(function(Colorhover) {
        $("#Mainbox").mouseover(function(){
            $("#Mainbox").css("background-color", "yellow");;
        });

        $("#Mainbox").mouseout(function(){
            $("#Mainbox").css("background-color", "white");;
        });

    });





  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.





    jsPlumb.ready(function() {
        console.log("jsPlumb loaded")

         jsPlumb.importDefaults({

          DragOptions : { cursor: "crosshair" },
          Endpoints : [ [ "Dot", { radius:7 } ], [ "Dot", { radius:11 } ] ],
          EndpointStyles : [{ fill:"#225588" }, { fill:"#558822" }]
        });

        /* Connect main box to classes */

            jsPlumb.connect({source:"Mainbox",target:"WebDevclass",paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:5 }],connector:["Straight"] });
            jsPlumb.connect({source:"Mainbox", target:"Ideationclass", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:5 }],connector:["Straight"]});
            jsPlumb.connect({source:"Mainbox", target:"photoclass", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:5 }],connector:["Straight"]});
            jsPlumb.connect({source:"Mainbox", target:"gameclass", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:5 }],connector:["Straight"]});
            jsPlumb.connect({source:"Mainbox", target:"pythonclass", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:5 }],connector:["Straight"]});


        var endpointOptions = { isSource:true,  paintStyle:{ fill:"black", } , endpoint:["Dot", { radius:5 }], maxConnections:-1,createEndpoint:true,connector:["Straight"] };
        var endpoint = jsPlumb.addEndpoint('WebDevclass', endpointOptions);    
        var endpoint = jsPlumb.addEndpoint('Ideationclass', endpointOptions);
        var endpoint = jsPlumb.addEndpoint('photoclass', endpointOptions);
        var endpoint = jsPlumb.addEndpoint('gameclass', endpointOptions);
        var endpoint = jsPlumb.addEndpoint('pythonclass', endpointOptions);

        var secondendpointOptions= { isSource:true,  paintStyle:{ fill:"black", } , endpoint:["Dot", { radius:5 }], anchor:"Bottom", maxConnections:-1,createEndpoint:true,connector:["Straight"]  };
        var endpoint = jsPlumb.addEndpoint('item0', secondendpointOptions);
        var endpoint = jsPlumb.addEndpoint('item1', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item2', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item3', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item4', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item5', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item6', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item7', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item8', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item9', secondendpointOptions);
        var endpoint = jsPlumb.addEndpoint('item10', secondendpointOptions);        

        var thirdpoint= { isSource:true,   paintStyle:{ fill:"black", } , endpoint:["Dot", { radius:5 }], anchor:"Bottom", maxConnections:-1,createEndpoint:true,connector:["Straight"]    };
        var endpoint = jsPlumb.addEndpoint('button0', thirdpoint);
        var endpoint = jsPlumb.addEndpoint('button1', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button2', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button3', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button4', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button5', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button6', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button7', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button8', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button9', thirdpoint);
        var endpoint = jsPlumb.addEndpoint('button10', thirdpoint);        



        jsPlumb.makeTarget("item0", {
          anchor:[ "AutoDefault", { 

          }]    

        });
        jsPlumb.draggable("item0")


        jsPlumb.makeTarget("item1", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item1")

        jsPlumb.makeTarget("item2", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item2")

        jsPlumb.makeTarget("item3", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item3")

                jsPlumb.makeTarget("item4", {
          anchor:[ "AutoDefault", { 

          }]

        });
        jsPlumb.draggable("item4")


        jsPlumb.makeTarget("item5", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item5")

        jsPlumb.makeTarget("item6", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item6")

        jsPlumb.makeTarget("item7", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item7")


        jsPlumb.makeTarget("item8", {
          anchor:[ "AutoDefault", { 

          }]

        });
        jsPlumb.draggable("item8")


        jsPlumb.makeTarget("item8", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item9")

        jsPlumb.makeTarget("item9", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item10")

        jsPlumb.makeTarget("item10", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("item10")




        jsPlumb.makeTarget("button0", {
          anchor:[ "AutoDefault", { 

          }]

        });
        jsPlumb.draggable("button0")


        jsPlumb.makeTarget("button1", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button1")

        jsPlumb.makeTarget("button2", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button2")

        jsPlumb.makeTarget("button3", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button3")

                jsPlumb.makeTarget("button4", {
          anchor:[ "AutoDefault", { 

          }]

        });
        jsPlumb.draggable("button4")


        jsPlumb.makeTarget("button5", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button5")

        jsPlumb.makeTarget("button6", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button6")

        jsPlumb.makeTarget("button7", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button7")


        jsPlumb.makeTarget("button8", {
          anchor:[ "AutoDefault", { 

          }]

        });
        jsPlumb.draggable("button8")


        jsPlumb.makeTarget("button9", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button9")

        jsPlumb.makeTarget("button10", {
          anchor:[ "AutoDefault", { 

          }]
        });
        jsPlumb.draggable("button10")



     

        jsPlumb.draggable("WebDevclass")
        jsPlumb.draggable("Ideationclass")
        jsPlumb.draggable("photoclass")
        jsPlumb.draggable("gameclass")
        jsPlumb.draggable("pythonclass")







                jsPlumb.makeTarget("button0", {
          anchor:[ "AutoDefault", { 

          }]

        });
        jsPlumb.draggable("button0")




})
})



    




        //         jsPlumb.makeTarget("item0", {
        //   anchor:[ "AutoDefault", { 

        //   }]
        // });
        // jsPlumb.draggable("item0")



