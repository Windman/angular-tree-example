import {Component, HostListener, Input} from '@angular/core';
import { TreeNode } from './tree-node'
import { TreeGenerator } from './tree-generator';

@Component({
    selector: 'tree',
    templateUrl: './tree.template.html',
    styleUrls: ['./tree.styles.css']
})

export class Tree {
    //treeGenerator: TreeGenerator = new TreeGenerator();

    @Input() tree: Array<TreeNode>;// = [new TreeNode('root', this.treeGenerator.generateTree(10, 8))];

    /*@HostListener('mouseenter') onMouseClick(event: Event) {
        console.log(event);
    }*/

    /*@Input() treeRenameDFS(){
        console.log('Renamed with DFS');
    }

    @Input() treeRenameBFS(){
        console.log('Renamed with BFS');
    }
    /*
    renameDFS(tree: Array<Node>, currentNumber: number) {
      tree.forEach(node => {
        if (node.data === 'root' && node.children.length !== 0) {
          this.renameDFS(node.children, currentNumber)
        } else {
          node.data.replace(/[0-9]{3}/, currentNumber.toString());
          if (node.children.length !== 0){
            this.renameDFS(node.children, currentNumber + 1) 
          }
        }
      });

      //or use stack[].
      //while (stack.length > 0){
        check node
        add all children to stack
      }
    }
  
    renameBFS(tree: Array<Node>, currentNumber: number){
      //to do BFS
    }
    */
}
