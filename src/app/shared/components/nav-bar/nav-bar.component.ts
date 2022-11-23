import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppR } from '~shared/config/constants/routes';

@Component( {
                selector: 'app-nav-bar',
                template: `
                    <p-menubar [model]="items" styleClass="m-2 h-4rem">

                        <!--    LOGO & NAME-->
                        <ng-template pTemplate="start">

                            <a
                                class="flex-row flex align-items-center justify-content-between gap-2 mr-6 no-underline"
                                routerLink="/"
                            >
                                <img
                                    src="assets/icon.png"
                                    alt="Logo"
                                    height="30"
                                    width="30"
                                >

                                <h3 class="min-w-max">Panarițiu MC</h3>

                            </a>
                        </ng-template>
                        <!--    END LOGO & NAME-->
                    </p-menubar>
                `,
                styles  : [
                    `
                      ::ng-deep .p-menubar {
                        background: #1a191b;
                      }

                      ::ng-deep p-menubarsub {
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                      }

                      ::ng-deep a.p-menubar-button {
                        order: 3;
                      }
                    `
                ]
            } )
export class NavBarComponent {

    buildMenuItem = (label: string, routerLink: string, icon: string, tooltip?: string): MenuItem => (
        {
            label,
            icon,
            escape                 : false,
            routerLink,
            routerLinkActiveOptions: { exact: true },
            tooltipOptions         : {
                tooltipLabel   : tooltip,
                tooltipPosition: 'bottom'
            }
        }
    );

    items: MenuItem[] = [
        this.buildMenuItem( 'Home', AppR.landing.full, 'bi bi-house' ),
        this.buildMenuItem( 'Mods', AppR.mods.full, 'bi bi-book-half', 'Mods List & Download' ),
        this.buildMenuItem( 'Mobs', AppR.mobs.full, 'bi bi-hearts', 'Register or see Mob Teleporting' ),
        this.buildMenuItem( 'RCON', AppR.rcon.full, 'bi bi-cpu', 'Remote Console (Admin)' )
    ];
}