import {Component, HostListener, Input} from '@angular/core';
import { TreeNode } from './tree-node'
import { TreeGenerator } from './tree-generator';

@Component({
    selector: 'tree',
    templateUrl: './tree.template.html',
    styleUrls: ['./tree.styles.css']
})

export class Tree {
    treeGenerator: TreeGenerator = new TreeGenerator();

    @Input() tree: Array<TreeNode> = [new TreeNode('root', this.treeGenerator.generateTree(8, 5))];

    @HostListener('document:keydown',['$event']) handleKeyboardEvent(event: KeyboardEvent) {
        console.log(event);
        if (event.key === "Insert"){
            //generate and add a new node here
            let newNode = new TreeNode('added',[]);
            //not sure how to get the current node
            
        }
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
