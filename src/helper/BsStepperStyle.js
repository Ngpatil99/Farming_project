import React from "react";

export default function BsStepperStyle() {
  return (
    <style>{`
    .bs-stepper .line {
        flex: 0;
        min-width: auto;
        min-height: auto;
        background-color: transparent;
        margin: 0
    }
    
    .bs-stepper .line i {
        font-size: 1.8rem
    }
    
    .bs-stepper .bs-stepper-header {
        padding: 1.185rem 1.125rem
    }
    
    .bs-stepper .bs-stepper-header .step .step-trigger {
        padding: 0 1rem;
        flex-wrap: nowrap
    }
    
    .bs-stepper .bs-stepper-header .step .step-trigger .bs-stepper-label {
        margin: 0;
        max-width: 224px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;
        display: inline-grid;
        font-weight: 600
    }
    
    .bs-stepper .bs-stepper-header .step .step-trigger .bs-stepper-label .bs-stepper-title {
        font-size: .9375rem;
        line-height: 1;
        font-weight: 600
    }
    
    .bs-stepper .bs-stepper-header .step .step-trigger .bs-stepper-label .bs-stepper-subtitle {
        margin-top: .2rem;
        font-size: .75rem;
        font-weight: normal
    }
    
    html:not([dir=rtl]) .bs-stepper .bs-stepper-header .step .step-trigger .bs-stepper-label {
        margin-left: .35rem
    }
    
    [dir=rtl] .bs-stepper .bs-stepper-header .step .step-trigger .bs-stepper-label {
        margin-right: .35rem
    }
    
    .bs-stepper .bs-stepper-header .step .step-trigger:hover {
        background-color: transparent
    }
      
    .bs-stepper .bs-stepper-header .step .bs-stepper-circle {
        height: 2.5rem;
        width: 2.5rem;
        font-weight: 500;
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .375rem
    }
    
    .bs-stepper .bs-stepper-content {
        padding: 1.5rem 1.5rem
    }
    
    .bs-stepper.vertical .bs-stepper-header {
        min-width: 18rem
    }
    
    .bs-stepper.vertical .bs-stepper-header .step .step-trigger {
        padding: 0.25rem .65rem;
        width: 100%;
    }
     
    .bs-stepper.vertical .bs-stepper-content {
        width: 100%
    }
    .bs-stepper.vertical .step-trigger{
        justify-content: flex-start;
    }
    .bs-stepper.vertical .bs-stepper-content .content:not(.active) {
        display: none
    }
    
    .bs-stepper.vertical.wizard-icons .step {
        text-align: center;
        padding: .75rem 0
    }
    
    .bs-stepper.wizard-icons .bs-stepper-header {
        justify-content: space-around
    }
    
    .bs-stepper.wizard-icons .bs-stepper-header .step-trigger {
        flex-direction: column
    }
    
    .bs-stepper.wizard-icons .bs-stepper-header .step-trigger .bs-stepper-icon svg {
        height: 3.5rem;
        width: 3.5rem;
        margin-bottom: .5rem
    }
    
    .bs-stepper.wizard-icons .bs-stepper-header .step-trigger .bs-stepper-icon i {
        font-size: 1.6rem
    }
    
    .bs-stepper.wizard-icons .bs-stepper-header .step-trigger .bs-stepper-label {
        font-weight: normal
    }
    
    .bs-stepper.wizard-icons .bs-stepper-header .step.active .bs-stepper-label {
        font-weight: 600
    }
    
    .bs-stepper.wizard-modern .bs-stepper-header {
        border-bottom: none !important
    }
    
    .bs-stepper.wizard-modern .bs-stepper-content {
        border-radius: .5rem
    }
    
    .bs-stepper.wizard-modern.vertical .bs-stepper-header {
        border-right: none !important
    }
    
    .light-style .bs-stepper {
        background-color: #fff
    }
    
    .light-style .bs-stepper:not(.wizard-modern) {
        box-shadow: 0 2px 6px 0 rgba(67, 89, 113, .12)
    }
    
    .light-style .bs-stepper .bs-stepper-header {
        border-bottom: 1px solid #d9dee3
    }
    
    .light-style .bs-stepper .bs-stepper-header .line {
        color: rgba(67, 89, 113, .4)
    }
    
    .light-style .bs-stepper .bs-stepper-header .line:before {
        background-color: rgba(67, 89, 113, .4)
    }
    
    .light-style .bs-stepper .bs-stepper-header .step:not(.active) .bs-stepper-circle {
        background-color: rgba(67, 89, 113, .16);
        color: #697a8d
    }
    
    .light-style .bs-stepper .bs-stepper-header .step .bs-stepper-subtitle {
        color: #a1acb8
    }
    
    .light-style .bs-stepper .step-trigger {
        color: #697a8d
    }
    
    .light-style .bs-stepper .step.crossed .bs-stepper-label {
        color: #a1acb8 !important
    }
    
    .light-style .bs-stepper.vertical .bs-stepper-header {
        border-bottom: none
    }
    
    @media(max-width: 991.98px) {
        .light-style .bs-stepper.vertical .bs-stepper-header {
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid #d9dee3
        }
    }
    
    .light-style .bs-stepper.wizard-modern {
        background-color: transparent
    }
    
    .light-style .bs-stepper.wizard-modern .bs-stepper-content {
        background-color: #fff;
        box-shadow: 0 2px 6px 0 rgba(67, 89, 113, .12)
    }
    
    .light-style .bs-stepper.wizard-icons .bs-stepper-header .bs-stepper-icon svg {
        fill: #697a8d
    }
    
    [dir=rtl].light-style .bs-stepper.vertical .bs-stepper-header {
        border-left: 1px solid #d9dee3
    }
    
    html:not([dir=rtl]).light-style .bs-stepper.vertical .bs-stepper-header {
        border-right: 1px solid #d9dee3
    }
    
    .dark-style .bs-stepper {
        background-color: #2b2c40
    }
    
    .dark-style .bs-stepper:not(.wizard-modern) {
        box-shadow: 0 .125rem .5rem 0 rgba(0, 0, 0, .16)
    }
    
    .dark-style .bs-stepper .bs-stepper-header {
        border-bottom: 1px solid #444564
    }
    
    .dark-style .bs-stepper .bs-stepper-header .bs-stepper-label {
        color: #a3a4cc
    }
    
    .dark-style .bs-stepper .bs-stepper-header .line {
        color: #a3a4cc
    }
    
    .dark-style .bs-stepper .bs-stepper-header .line:before {
        background-color: #2b2c40
    }
    
    .dark-style .bs-stepper .bs-stepper-header .step:not(.active) .bs-stepper-circle {
        background-color: rgba(124, 125, 182, .16);
        color: #a3a4cc
    }
    
    .dark-style .bs-stepper .step-trigger {
        color: #a3a4cc
    }
    
    .dark-style .bs-stepper .step.crossed .bs-stepper-label {
        color: #7071a4 !important
    }
    
    .dark-style .bs-stepper .step .bs-stepper-subtitle {
        color: #7071a4
    }
    
    .dark-style .bs-stepper.vertical .bs-stepper-header {
        border-bottom: none
    }
    
    @media(max-width: 991.98px) {
        .dark-style .bs-stepper.vertical .bs-stepper-header {
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid #444564
        }
    }
    
    .dark-style .bs-stepper.wizard-modern {
        background-color: transparent
    }
    
    .dark-style .bs-stepper.wizard-modern .bs-stepper-content {
        background-color: #2b2c40;
        box-shadow: 0 .125rem .5rem 0 rgba(0, 0, 0, .16)
    }
    
    .dark-style .bs-stepper.wizard-icons .bs-stepper-header .bs-stepper-icon i {
        color: #a3a4cc
    }
    
    .dark-style .bs-stepper.wizard-icons .bs-stepper-header .bs-stepper-icon svg {
        fill: #a3a4cc
    }
    
    .dark-style .bs-stepper.wizard-icons .bs-stepper-header .bs-stepper-label {
        color: #a3a4cc
    }
    
    [dir=rtl].dark-style .bs-stepper.vertical .bs-stepper-header {
        border-left: 1px solid #444564
    }
    
    html:not([dir=rtl]).dark-style .bs-stepper.vertical .bs-stepper-header {
        border-right: 1px solid #444564
    }
    
    [dir=rtl] .bs-stepper .bs-stepper-content .btn-next i,
    [dir=rtl] .bs-stepper .bs-stepper-content .btn-prev i {
        transform: rotate(180deg)
    }
    
    [dir=rtl] .bs-stepper.wizard-modern.vertical .bs-stepper-header {
        border-left: none !important
    }
    
    @media(min-width: 992px) {
        [dir=rtl] .bs-stepper .bs-stepper-header .line i {
            transform: rotate(180deg)
        }
    }
    
    @media(max-width: 991.98px) {
        [dir=rtl] .bs-stepper .bs-stepper-header .step .step-trigger .bs-stepper-label {
            margin-left: 0;
            margin-right: .35rem
        }
    }
    
    @media(max-width: 991.98px) {
        .bs-stepper .bs-stepper-header {
            flex-direction: column;
            align-items: flex-start
        }
    
        .bs-stepper .bs-stepper-header .step .step-trigger {
            padding: .5rem 0;
            flex-direction: row
        }
    
        .bs-stepper .bs-stepper-header .step .step-trigger .bs-stepper-label {
            margin-left: .35rem
        }
    
        .bs-stepper .bs-stepper-header .step:first-child .step-trigger {
            padding-top: 0
        }
    
        .bs-stepper .bs-stepper-header .step:last-child .step-trigger {
            padding-bottom: 0
        }
    
        .bs-stepper.vertical {
            flex-direction: column
        }
    
        .bs-stepper.vertical .bs-stepper-header {
            align-items: flex-start
        }
    
        .bs-stepper:not(.vertical) .bs-stepper-header .line i {
            display: none
        }
    
        .bs-stepper.wizard-icons .bs-stepper-header .bs-stepper-icon svg {
            margin-top: .5rem
        }
    }
    
    @media(max-width: 520px) {
        .bs-stepper-header {
            margin: 0
        }
    }
 
    .vertical .content.fade.dstepper-none.dstepper-block{
        visibility: visible;
    }
    .bs-stepper .step.active .step-trigger {
        background: #076fb01f;
    }
    .light-style .bs-stepper .bs-stepper-header .step.active .bs-stepper-subtitle {
        color: #076fb0bd;
    }

    `}</style>
  );
}
