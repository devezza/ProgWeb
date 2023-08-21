function content(){
    document.write("<table border='1'>")
    for(let i=1;i<=10;i++){
        document.write("<tr>Produto de "+i+"</tr>")
        // for(let j=1;j<=10;j++){
        //     document("<tr>" + i + "x" + j + "=" + i*j + "</tr>");
        // }
        document.write("</table>");
    }
}