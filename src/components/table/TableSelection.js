export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
    this.current = null
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear()
    $el.focus().addClass(TableSelection.className)
    this.group.push($el)
    this.current = $el
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group = []
  }

  selectGroup($group = []) {
    this.clear()

    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }

  get selectedIds() {
    return this.group.map($el => $el.id())
  }

  selectCells($el) {
    const isSelected = $el.hasClass(TableSelection.className)
    if (isSelected ) {
      $el.removeClass(TableSelection.className)
    } else {
      this.group.push($el)
      this.group.forEach($el => $el.addClass(TableSelection.className))
    }
  }

  applyStyle(style) {
    this.group.forEach($el => $el.css(style))
  }
}