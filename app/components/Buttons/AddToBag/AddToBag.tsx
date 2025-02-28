'use client'
import React, { useState } from 'react'
import { GeneralButton } from '../General/General'
import { BagProduct } from '@/app/utility/types'
import { useBagContext } from '@/app/utility/contexts/BagContext'
import { useNumberStepperContext } from '@/app/utility/contexts/NumberStepperContext'
import { validateBagProduct } from '@/server/mockValidations'

interface AddToBagProps {
  children?: React.ReactNode;
  id: number;
  option: string;
  size: string;
  icon?: boolean;
  forceMenu?: boolean;
  className?: string;
}

const AddToBagButton = ({ children, id, option, size, icon = false, forceMenu = true, className = 'btn padding-lg' }: AddToBagProps) => {
  const { bagItems, setBagItems, setForceOpen, forceElementRef, scrollableRef } = useBagContext();
  const { productQuantity } = useNumberStepperContext();
  const [isClicked, setIsClicked] = useState(false);

  const productResponse = validateBagProduct(id, option, size, productQuantity);
  
  const handleClick = () => {
    // If the button is clicked, set the isClicked state to true to show the loading animation and set the forceOpen state to true to open the menu
    setIsClicked(true);
    setForceOpen(true);
    
    // If the product is out of stock, return
    if (productResponse.inStock === false) return;

    // Find the product from the "api" response
    const product = productResponse.bagProduct
    
    // Check if the product already exists in the bagItems array
    const existingItemIndex = bagItems.findIndex((item) => 
      item.id === product.id &&
      item.selectedOption == product.selectedOption &&
      item.selectedSize == product.selectedSize
    );

    // If the product exists, update its index and update the bagItems array.
    if (existingItemIndex !== -1) {
      product.index = bagItems[existingItemIndex].index;
      const newBagItems = [...bagItems as BagProduct[]];
      newBagItems[existingItemIndex].selectedQuantity = Math.min(newBagItems[existingItemIndex].selectedQuantity + product.selectedQuantity, 99);
      setBagItems(newBagItems);
      localStorage.setItem('bagItems', JSON.stringify(newBagItems));
    } else { // If the product doesn't exist, add it to the bagItems array and update the bagItems array.
      product.index = bagItems.length;
      const newBagItems = [...bagItems as BagProduct[], product];
      setBagItems(newBagItems);
      localStorage.setItem('bagItems', JSON.stringify(newBagItems));
    }

    // Timeout to ensure this runs after product is added to bagItems to ensure element exists
    setTimeout(() => {
      const element = document.getElementById(product.index.toString());
      if (element && scrollableRef.current) {
        const scrollableElement = scrollableRef.current;
        const scrollableRect = scrollableElement.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        if (elementRect.top < scrollableRect.top || elementRect.bottom > scrollableRect.bottom) {
          scrollableElement.scrollTo({
            top: element.offsetTop - scrollableRect.top,
            behavior: 'smooth',
          });
        }
      }
    }, 0)
  }

  // Set the conditional to run the animation to false on animation end
  const onAnimationEnd = () => {
    setIsClicked(false);
  }

  return (
    <>
      {productResponse.inStock
        ? <GeneralButton refProp={forceMenu ? forceElementRef : null} onClick={handleClick} onAnimationEnd={onAnimationEnd} aria-label={`Add ${productResponse.bagProduct.name} to bag`} className={`${className} ${isClicked ? 'active' : ''}`}>
            {icon &&
              <svg
                aria-hidden
                viewBox="0 0 32 32"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z"/>
              </svg>
            }
            {children}
          </GeneralButton>
        : <GeneralButton aria-label='Add to bag disabled' className={`disabled ${className}`}>
            {icon &&
              <svg
                aria-hidden
                viewBox="0 0 32 32"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z"/>
              </svg>
            }
            {children}
          </GeneralButton>
      }
    </>
  )
}

export default AddToBagButton;


