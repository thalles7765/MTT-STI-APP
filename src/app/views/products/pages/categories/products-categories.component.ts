import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { AppImports } from '../../../../app.imports';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-categories',
  standalone: true,
  imports: [AppImports, OverlayPanelModule],
  templateUrl: './products-categories.component.html',
  styleUrl: './products-categories.component.scss'
})
export class ProductsCategoriesComponent {
  private _toast = inject(ToastrService);
  private productSvc = inject(ProductsService);
  products!: any[];
  categories!: any[];
  selectedCategories!: any;

  loadingProductsCategorie = false;
  categoryOpen = [];


  ngOnInit() {
    this.productSvc.getDataCategories().then((data) => {
      if (data.data.length) {
        this.categories = data.data;
      }
    });
  }

  async getProductsCategorie(op: OverlayPanel, event, categorie) {
    if (!Boolean(categorie.count > 0)) {
      this._toast.warning('Não existem registros à serem exibidos.', 'Sem registros!', { timeOut: 2000 });
      return
    }

    this.loadingProductsCategorie = true;
    this.categoryOpen.push(categorie.id)
    await this.productSvc.getDataProductCategories(categorie.id).then((data) => {
      if (data.data.length) {
        this.products = data.data;

        this.categoryOpen.splice(this.categoryOpen.indexOf(categorie.id), 1)
        this.loadingProductsCategorie = false;
        op.show(event);
      } else {
        this.categoryOpen.splice(this.categoryOpen.indexOf(categorie.id), 1)
        this.loadingProductsCategorie = false;
      }
    });
  }

}
