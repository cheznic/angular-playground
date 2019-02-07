# Angular Servers Example Project
This project contains examples of how servers can be used in Angualr apps.

- Service creation
- Service injection
- Hierarchial Injection
- Sharing a single service instance
- Cross component communication

## Angualr 6+ syntax change
Note: Instead of adding a service class to the providers[]  array in AppModule , you can set the following config in `@Injectable()`:

```ts
@Injectable({providedIn: 'root'})
export class MyService { ... }
```

This is exactly the same as:

```ts
export class MyService { ... }
and

import { MyService } from './path/to/my.service';
 
@NgModule({
    ...
    providers: [MyService]
})
export class AppModule { ... }
```
> This new syntax is optional and the previous syntax is still supported.

>The new syntax offers the advantage that Services can be loaded lazily by Angular (behind the scenes) and redundant code can be removed automatically. This can lead to a better performance and loading speed.