export const complete=`I have a question with three code blocks

Code block #1:

\`\`\`typescript
let fibonacci: number[] = [0, 1];

function listFibonacci(num: number) {
  for (let i: number = 2; i < num; i++) {
  

      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      }
      return fibonacci;
}
console.log(listFibonacci(10));
\`\`\`


Code block #2
\`\`\`scss

.button {
&:hover {
&:active {
  color:green;
}
}
}

input[type=text] {
    border-color: green;
        background-color:yellow;

  }
\`\`\`



Code block #3:
\`\`\`html
<html>
  <body><table><thead><tr><th>#</th><th>second column</th></tr></thead><tbody><tr><td>1</td><td>name #1</td></tr>
  <tr><td>2</td><td>name #1</td></tr></tbody>
  </table>
  </body>
    </html>
\`\`\``