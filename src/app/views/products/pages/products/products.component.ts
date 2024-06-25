import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AppImports } from '../../../../app.imports';
import { ProductsService } from '../../../../services/products.service';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { GalleriaModule } from 'primeng/galleria';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AppImports, OverlayPanelModule, GalleriaModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private productSvc = inject(ProductsService);
  products!: any[];
  categories!: any[];
  filterCategories!: any[];

  formProduct: FormGroup;

  selectedProducts!: any;
  showdialogProduct = false;
  showdialogRegisterProduct = false;
  // listCategories = [];
  productShow: any;
  productSelectedCategorie: any;

  arrayImages: any[] = [];
  arrayCategories: any[] = [];
  @ViewChild('searchCategorie') input: ElementRef<HTMLInputElement>;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngOnInit() {
    this.formProduct = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      short_description: new FormControl(''),
      type: new FormControl('simple'),
      regular_price: new FormControl('0'),
      slug: new FormControl('testando slug post22'),
      shipping_class: new FormControl('testando metadatada post22')
    })

    this.productSvc.getData().then((data) => {
      if (data.data.length) {
        this.products = data.data;
      }
    });
  }

  showDialog(record) {
    this.showdialogProduct = !this.showdialogProduct;
    this.productShow = record;
  }

  openLink(url) {
    window.open(url, '_blank')
  }

  openDialogCategories(op: OverlayPanel, event, product) {
    this.productSelectedCategorie = product;
    // this.listCategories = product.categories;
    op.show(event);
  }

  async getCategories() {
    this.arrayCategories = [];
    this.arrayImages = [];

    await this.productSvc.getDataCategories().then((data) => {
      if (data.data.length) {
        this.categories = data.data;
        this.filterCategories = this.categories;
      }
    });
  }

  filter(filterValue: string = '') {
    if (filterValue) {
      this.filterCategories = this.categories.filter(o => o.name.toUpperCase().includes(filterValue.toUpperCase()));
    }
  }

  addImageArray(value) {
    this.arrayImages.push({ src: value })
    console.log(value)
    console.log('@@@#@#@#@')
    console.log(this.arrayImages)
  }

  saveProduct(form: FormGroup) {
    // console.log(form.value)
    let xnewProduct = { ...form.value, categories: this.arrayCategories, images: this.arrayImages };

    this.productSvc.createProduct(xnewProduct);

    console.log(xnewProduct)
    // showdialogRegisterProduct = !showdialogRegisterProduct;
  }
}
