import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface LessonsNode {
  name: string;
  children?: LessonsNode[];
}

const TREE_DATA: LessonsNode[] = [
  {
    name: 'المرحله التعليميه',
    children: [
      {
        name: 'الابتدائيه',
        children: [
          { 
            name: 'الصف',
            children: [
              { name: 'الآول',
                children: [
                  {
                    name: 'الماده',
                      children: [
                        {
                          name: 'اللغه العربيه',
                            children: [{
                              name: 'الوحده',
                                children: [
                                  { name: 'الاولي',
                                    children: [
                                      {
                                        name: 'الدروس',
                                          children: [
                                            { name: 'الدرس الاول' }
                                        ]
                                      }
                                    ]
                                  },
                                  { name: 'الثانيه' },
                                  { name: 'الثالثه' },
                                ]
                            }]
                        }
                      ]
                  }

                ]
              },
              { name: 'الثاني' },
              { name: 'الثالث' },
              { name: 'الرابع' },
              { name: 'الخامس' },
              { name: 'السادس' },
            ]
          }
        ]
      }
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _transformer = (node: LessonsNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  constructor() { 
    this.dataSource.data = TREE_DATA;

  }

  ngOnInit() {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
