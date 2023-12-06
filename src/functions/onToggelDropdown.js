export default function onToggelDropdown(isDropdownVisible, setVisibility) {
  (isDropdownVisible === 'disappear')? setVisibility(""): setVisibility('disappear');

}
