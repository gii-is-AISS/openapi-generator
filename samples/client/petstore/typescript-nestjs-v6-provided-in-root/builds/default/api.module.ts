import { DynamicModule, HttpService, HttpModule, Module, Global } from '@nestjs/common';
import { Configuration } from './configuration';
import { BASE_PATH } from './variables';

import { PetService } from './api/pet.service';
import { StoreService } from './api/store.service';
import { UserService } from './api/user.service';

@Global
@Module({
  imports:      [ HttpModule ],
  exports:      [   
    PetServiceStoreServiceUserService 
  ],
  providers: [
    PetServiceStoreServiceUserService 
  ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): DynamicModule {
        return {
            module: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( httpService: HttpService) { }
}
