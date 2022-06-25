var scoops = 8; 
        while (scoops > 0) {
            document.write ("Anather scoop! <br>");
            scoops = scoops - 1;
            
            if (scoops >= 5) {
                alert("Eat faster, the ice cream is going to melt!");
            } else if (scoops == 4) {
                alert ("Ice cream is running low 4st!");
            } else if (scoops == 3) {
                alert ("Ice cream is running low 3st!");
            } else if (scoops == 2) {
                alert ("Ice cream is running low 2st!");
            } else if (scoops == 1) {
                alert ("Ice cream is running low! 1st");
            } else if (scoops == 0) {
                alert ("Ice cream is over!");
            }
        }

        document.write ("конец цыкла <br>")