"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const authentication_middleware_1 = require("./common/authentication.middleware");
const items_controller_1 = require("./items/items.controller");
const shopping_cart_controller_1 = require("./shopping-cart/shopping-cart.controller");
const items_service_1 = require("./items/items.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(authentication_middleware_1.AuthenticationMiddleware)
            .forRoutes({ path: '/items', method: common_1.RequestMethod.POST }, { path: '/shopping-cart', method: common_1.RequestMethod.POST });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [items_controller_1.ItemsController, shopping_cart_controller_1.ShoppingCartController],
        providers: [items_service_1.ItemsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map