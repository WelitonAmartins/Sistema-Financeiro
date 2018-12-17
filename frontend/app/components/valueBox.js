angular.module('primeiraApp').component('valueBox', {
    bindings: {
        grid: '@',
        corClass: '@',
        valor: '@',
        text: '@',
        iconeClass: '@'
    },
    controller: [
        'gridSystem',
        function (gridSystem) {
            this.$onInit = function (){
            this.gridClasses = gridSystem.toCssClasses(this.grid)
        }
        }
    ],
    template: `
            <div class="{{ $ctrl.gridClasses }}">
              <div class="small-box {{ $ctrl.corClass }}">
                <div class="inner">
                    <h3>{{ $ctrl.valor }}</h3>
                    <p>{{ $ctrl.text }}</p>
                </div>
                <div class="icon">
                    <i class="fa {{ $ctrl.iconeClass }}"></i>
                </div>
             </div>
            </div>
    `
})