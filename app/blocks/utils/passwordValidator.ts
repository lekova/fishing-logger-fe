import { Control } from '@angular/common';


export function passwordValidator( control: Control ): { [message: string]: boolean } 
{
  if( control.value.length > 0 ) 
  {
    var pass: string = control.value;
    if( !pass || pass.length < 3 )
      return { 'invalidLength': true };

    // at least one number
//     if( !pass.match(/[0-9]/) )
//       return { 'minNumber': true };

//     // at least one upper/lower char
//     if( !pass.match(/[a-zA-Z]/) )
//       return { 'minChar': true };

//     // at least one special character
//     if( !pass.match(/[!,%,&,@,#,$,^,*,?,_,~]/) )
//       return { 'specialChar': true };
   }
}