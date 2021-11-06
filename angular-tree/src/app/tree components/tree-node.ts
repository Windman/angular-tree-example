export class TreeNode {
    data: string;
    children: Array<TreeNode>;
    expanded: boolean;

    constructor (data: string, children: Array<TreeNode>){
        this.data = data;
        this.children = children;
        this.expanded = false;
    }

    expand () {
        this.expanded = !this.expanded;
    }
}