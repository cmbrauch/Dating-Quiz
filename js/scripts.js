$(document).ready(function() {
    $("form#dating").submit(function(event) {
        const age = $("#howOld").val();
        const statusInput = $("#status").val();
        
        if (age === "young") {
            $("#output").text("You might be too young to be dating without parental permission");
        } else if (age === "youngAdult") {
            $("#output").text("Your celebrity date would be Zach Efron");
        } else if (age === "middleAge") {
            $("#output").text("Your celebrity date would be Adam Sandler");
        } else {
            $("#output").text("Your celebrity date would be William Shatner");
        }
        event.preventDefault();
      })
});
