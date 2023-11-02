import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // FETCHING ROUTE PARAMETERS => bad
    this.user = {
      id: this.route.snapshot.params['userId'],
      name: this.route.snapshot.params['name'],
    }

     // FETCHING ROUTE PARAMETERS REACTIVELY 
     // use this approach whenever you are expecting the parameters of the route to change in the same component
    this.route.params.subscribe(p => {
      this.user.id = p['userId'];
      this.user.name = p['name'];
    });
  }

}
