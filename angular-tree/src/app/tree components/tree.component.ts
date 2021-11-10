import {Component, Input} from '@angular/core';
import { TreeNode } from './tree-node'

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})

export class TreeComponent {
    
    @Input() tree: Array<TreeNode>;

}
