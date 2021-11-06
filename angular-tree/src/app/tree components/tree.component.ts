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
}
