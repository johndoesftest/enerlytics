document.addEventListener('DOMContentLoaded', () => {
     // --- Translations ---
    const translations = {
        en: {
            // Welcome Header
            goodMorning: "Good morning",
            goodAfternoon: "Good afternoon",
            goodEvening: "Good evening",
            // Sidebar
            dashboard: "Dashboard", deliveryPoints: "Delivery Points", procurement: "Procurement", invoiceAudit: "Invoice Audit", monitor: "Monitor", energySolutions: "Energy Solutions", marketOverview: "Market Overview", companyProfile: "Company Profile", userManagement: "User Management", help: "Help",
            // Header
            search: "Search...",
            addDeliveryPoint: "Add Delivery Point",
            uploadInvoice: "Upload Invoice",
            createNewReport: "Create New Report",
            notifications: "Notifications",
            markAllAsRead: "Mark all as read",
            notif1Title: "Invoice #5678 Approved",
            notif1Desc: "John Doe approved the invoice for Factory A.",
            notif1Time: "15 minutes ago",
            notif2Title: "New Trade Executed",
            notif2Desc: "Automated procurement bought 50 MWh for September.",
            notif2Time: "1 hour ago",
            notif3Title: "Price Alert Triggered",
            notif3Desc: "Market price exceeded your threshold of 200 €/MWh.",
            notif3Time: "3 hours ago",
            viewAllNotifications: "View all notifications",
            settings: "Settings",
            language: "Language",
            theme: "Theme",
            setAlerts: "Set Alerts",
            setGoals: "Set Goals",
            toggleLayout: "Toggle Layout",
            enterZenMode: "Enter Zen Mode",
            exitZenMode: "Exit Zen Mode",
            profile: "Profile",
            logout: "Logout",
            // KPIs
            kpiPrice: "Current Portfolio Price", kpiConsumption: "Consumption (This Month)", kpiOverdue: "Overdue Invoices",
            // Widgets
            energyServices: "Energy Services",
            portfolioDev: "Portfolio Development:", model: "Model:", stopLoss: "Trailing Stop Loss",
            january: "January '23", february: "February '23",
            wzCode: "WZ-Code: 27.40.0",
            service1: "Service Agreement Compliance", service2: "Regulatory Reporting Submitted", service3: "Efficiency Audit Completed", service4: "Renewable Energy Credits Verified",
            scenarioPlanner: "\"What-If\" Scenario Planner", hypotheticalPrice: "Hypothetical Market Price (€/MWh)", monthlyConsumption: "Monthly Consumption (MWh)", calculate: "Calculate", estimatedCost: "Estimated Monthly Cost:",
            auditTrail: "Audit Trail",
            audit1User: "User", audit1Action: "approved Invoice #5678", approved: "Approved",
            audit2Action: "Automated procurement executed a trade", system: "System",
            yesterday: "Yesterday",
            audit3User: "User", audit3Action: "updated delivery point \"Factory A\"", updated: "Updated",
            audit4User: "User", audit4Action: "logged in", login: "Login",
            upcomingDueDates: "Upcoming Due Dates",
            invoice: "Invoice", due: "Due:", regulatoryReport: "Regulatory Report",
            addToCalendar: "Add to Calendar", allCaughtUp: "All caught up!", clear: "Clear",
            costAllocation: "Cost Allocation",
            from: "from", to: "to", compare: "Compare", update: "Update", forecast: "Forecast", all: "All", point1: "Point 1", point2: "Point 2", point3: "Point 3",
            export: "Export", exportCsv: "Export as CSV",
            // Modals
            detailedView: "Detailed View",
            manageAlerts: "Manage Alerts", priceThreshold: "Market Price Threshold (€/MWh)", enablePriceAlert: "Enable Price Alert", close: "Close", saveChanges: "Save Changes",
            generatePdfReport: "Generate PDF Report", selectWidgets: "Select the widgets to include in the report:", cancel: "Cancel", generatePdf: "Generate PDF",
            setKpiGoals: "Set KPI Goals", consumptionGoal: "Consumption Goal (MWh)", priceGoal: "Price Goal (€/MWh)", saveGoals: "Save Goals",
            comments: "Comments", addCommentPlaceholder: "Add a comment...", postComment: "Post Comment", noCommentsYet: "No comments yet.", commentsOn: "Comments on",
            // Command Palette
            searchPlaceholder: "Search invoices, delivery points, or type a command...",
            // Toasts
            priceAlert: "Price Alert!",
            // Tooltips
            tooltipMonitor: "Tracks and visualizes your energy consumption over selected time periods. Click a bar to see a detailed daily breakdown.",
            tooltipProcurement: "Summarizes your current energy purchasing strategy, its performance, and status (e.g., automated).",
            tooltipInvoiceAudit: "Shows the status of recent invoices, indicating whether they have been successfully audited, are pending, or have issues.",
            tooltipDueDates: "Lists important upcoming deadlines for invoices and regulatory reports to help you stay on track.",
            tooltipCostAllocation: "Visualizes how energy costs are distributed across different delivery points or departments.",
            tooltipMarketOverview: "Displays current and historical energy market price trends to provide context for procurement decisions.",
            tooltipScenarioPlanner: "Allows you to estimate future energy costs by inputting hypothetical market prices and consumption levels.",
            tooltipEnergyServices: "Tracks the status of various energy-related services and compliance tasks.",
            tooltipAuditTrail: "Logs recent user and system activities within the dashboard for transparency and security."
        },
        de: {
            // Welcome Header
            goodMorning: "Guten Morgen",
            goodAfternoon: "Guten Tag",
            goodEvening: "Guten Abend",
            // Sidebar
            dashboard: "Dashboard", deliveryPoints: "Lieferstellen", procurement: "Beschaffung", invoiceAudit: "Rechnungsprüfung", monitor: "Monitor", energySolutions: "Energielösungen", marketOverview: "Marktübersicht", companyProfile: "Firmenprofil", userManagement: "Nutzerverwaltung", help: "Hilfe",
            // Header
            search: "Suchen...",
            addDeliveryPoint: "Lieferstelle hinzufügen",
            uploadInvoice: "Rechnung hochladen",
            createNewReport: "Neuen Bericht erstellen",
            notifications: "Benachrichtigungen",
            markAllAsRead: "Alle als gelesen markieren",
            notif1Title: "Rechnung #5678 genehmigt",
            notif1Desc: "John Doe hat die Rechnung für Werk A genehmigt.",
            notif1Time: "vor 15 Minuten",
            notif2Title: "Neuer Handel ausgeführt",
            notif2Desc: "Automatisierte Beschaffung kaufte 50 MWh für September.",
            notif2Time: "vor 1 Stunde",
            notif3Title: "Preisalarm ausgelöst",
            notif3Desc: "Der Marktpreis hat Ihre Schwelle von 200 €/MWh überschritten.",
            notif3Time: "vor 3 Stunden",
            viewAllNotifications: "Alle Benachrichtigungen anzeigen",
            settings: "Einstellungen",
            language: "Sprache",
            theme: "Thema",
            setAlerts: "Alarme einstellen",
            setGoals: "Ziele setzen",
            toggleLayout: "Layout umschalten",
            enterZenMode: "Zen-Modus aktivieren",
            exitZenMode: "Zen-Modus beenden",
            profile: "Profil",
            logout: "Ausloggen",
            // KPIs
            kpiPrice: "Aktueller Portfoliopreis", kpiConsumption: "Verbrauch (Dieser Monat)", kpiOverdue: "Überfällige Rechnungen",
            // Widgets
            energyServices: "Energiedienstleistungen",
            portfolioDev: "Portfolioentwicklung:", model: "Modell:", stopLoss: "Trailing Stop-Loss",
            january: "Januar '23", february: "Februar '23",
            wzCode: "WZ-Code: 27.40.0",
            service1: "Dienstleistungsvertrag erfüllt", service2: "Regulatorische Berichte eingereicht", service3: "Effizienz-Audit abgeschlossen", service4: "Herkunftsnachweise überprüft",
            scenarioPlanner: "\"Was-wäre-wenn\"-Szenarioplaner", hypotheticalPrice: "Hypothetischer Marktpreis (€/MWh)", monthlyConsumption: "Monatlicher Verbrauch (MWh)", calculate: "Berechnen", estimatedCost: "Geschätzte monatliche Kosten:",
            auditTrail: "Audit-Trail",
            audit1User: "Benutzer", audit1Action: "hat Rechnung #5678 genehmigt", approved: "Genehmigt",
            audit2Action: "Automatisierte Beschaffung führte einen Handel aus", system: "System",
            yesterday: "Gestern",
            audit3User: "Benutzerin", audit3Action: "hat Lieferstelle \"Werk A\" aktualisiert", updated: "Aktualisiert",
            audit4User: "Benutzer", audit4Action: "hat sich eingeloggt", login: "Anmeldung",
            upcomingDueDates: "Anstehende Fälligkeiten",
            invoice: "Rechnung", due: "Fällig:", regulatoryReport: "Regulatorischer Bericht",
            addToCalendar: "Zum Kalender hinzufügen", allCaughtUp: "Alles erledigt!", clear: "Leeren",
            costAllocation: "Kostenverteilung",
            from: "von", to: "bis", compare: "Vergleichen", update: "Aktualisieren", forecast: "Prognose", all: "Alle", point1: "Stelle 1", point2: "Stelle 2", point3: "Stelle 3",
            export: "Exportieren", exportCsv: "Als CSV exportieren",
            // Modals
            detailedView: "Detailansicht",
            manageAlerts: "Alarme verwalten", priceThreshold: "Marktpreis-Schwelle (€/MWh)", enablePriceAlert: "Preisalarm aktivieren", close: "Schließen", saveChanges: "Änderungen speichern",
            generatePdfReport: "PDF-Bericht erstellen", selectWidgets: "Wählen Sie die Widgets für den Bericht aus:", cancel: "Abbrechen", generatePdf: "PDF erstellen",
            setKpiGoals: "KPI-Ziele festlegen", consumptionGoal: "Verbrauchsziel (MWh)", priceGoal: "Preisziel (€/MWh)", saveGoals: "Ziele speichern",
            comments: "Kommentare", addCommentPlaceholder: "Einen Kommentar hinzufügen...", postComment: "Kommentar posten", noCommentsYet: "Noch keine Kommentare.", commentsOn: "Kommentare zu",
            // Command Palette
            searchPlaceholder: "Rechnungen, Lieferstellen suchen oder Befehl eingeben...",
            // Toasts
            priceAlert: "Preisalarm!",
            // Tooltips
            tooltipMonitor: "Verfolgt und visualisiert Ihren Energieverbrauch über ausgewählte Zeiträume. Klicken Sie auf einen Balken, um eine detaillierte tägliche Aufschlüsselung zu sehen.",
            tooltipProcurement: "Fasst Ihre aktuelle Strombeschaffungsstrategie, deren Leistung und Status (z.B. automatisiert) zusammen.",
            tooltipInvoiceAudit: "Zeigt den Status der letzten Rechnungen an und gibt an, ob sie erfolgreich geprüft wurden, ausstehen oder Probleme aufweisen.",
            tooltipDueDates: "Listet wichtige bevorstehende Fristen für Rechnungen und regulatorische Berichte auf, damit Sie den Überblick behalten.",
            tooltipCostAllocation: "Visualisiert, wie die Energiekosten auf verschiedene Lieferstellen oder Abteilungen verteilt sind.",
            tooltipMarketOverview: "Zeigt aktuelle und historische Preisentwicklungen am Energiemarkt, um einen Kontext für Beschaffungsentscheidungen zu schaffen.",
            tooltipScenarioPlanner: "Ermöglicht die Schätzung zukünftiger Energiekosten durch Eingabe hypothetischer Marktpreise und Verbrauchsmengen.",
            tooltipEnergyServices: "Verfolgt den Status verschiedener energiebezogener Dienstleistungen und Compliance-Aufgaben.",
            tooltipAuditTrail: "Protokolliert die letzten Benutzer- und Systemaktivitäten im Dashboard zur Transparenz und Sicherheit."
        }
    };

    // --- Language Switcher ---
    function setLanguage(lang) {
        if (!translations[lang]) return;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.dataset.langPlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update popover content
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
            const popoverInstance = bootstrap.Popover.getInstance(el);
            if (popoverInstance) {
                const titleKey = el.dataset.langKeyPopoverTitle;
                const contentKey = el.dataset.langKeyPopoverContent;
                const newTitle = translations[lang][titleKey] || (translations['en'] ? translations['en'][titleKey] : '');
                const newContent = translations[lang][contentKey] || (translations['en'] ? translations['en'][contentKey] : '');
                popoverInstance.setContent({
                    '.popover-header': newTitle,
                    '.popover-body': newContent
                });
            }
        });


        // Update language button active state
        document.querySelectorAll('[data-lang]').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        setWelcomeHeader(lang); // Update welcome header on language change
    }

    // --- Personalized Welcome Header ---
    const setWelcomeHeader = (lang) => {
        const welcomeHeader = document.getElementById('welcome-header');
        if (!welcomeHeader) return;

        const userName = "John"; // Placeholder
        const currentHour = new Date().getHours();
        let greetingKey = "";

        if (currentHour < 12) {
            greetingKey = "goodMorning";
        } else if (currentHour < 18) {
            greetingKey = "goodAfternoon";
        } else {
            greetingKey = "goodEvening";
        }
        
        const greeting = translations[lang][greetingKey] || translations['en'][greetingKey];
        welcomeHeader.textContent = `${greeting}, ${userName}.`;
    };

    // --- Mobile Sidebar Toggle ---
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    function toggleSidebar() { 
        const isExpanded = sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', isExpanded);
    }
    menuButton.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
    
    // --- Dynamic Dropdown Caret Positioning ---
    const positionHeaderDropdowns = () => {
        const dropdowns = document.querySelectorAll('.header-controls .dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('show.bs.dropdown', (e) => {
                const menu = dropdown.querySelector('.dropdown-menu');
                const button = e.relatedTarget; // The button that was clicked
                
                if (menu && button) {
                    const buttonWidth = button.offsetWidth;
                    // Calculate offset from the right edge of the button to its center
                    const offset = buttonWidth / 2; 
                    
                    // Set the CSS variable on the .dropdown container for the pseudo-element
                    dropdown.style.setProperty('--caret-offset', `${offset}px`);
                    
                    // Keep the special positioning for the smaller menus
                    if (!dropdown.querySelector('.notification-dropdown-menu')) {
                        menu.style.right = '-10px';
                    }
                }
            });
        });
    };
    positionHeaderDropdowns(); // Call the function to attach listeners

    // --- Command Palette ---
    const commandPaletteModalEl = document.getElementById('command-palette-modal');
    const commandPaletteModal = new bootstrap.Modal(commandPaletteModalEl);
    const openSearchPaletteBtn = document.getElementById('open-search-palette');
    const commandPaletteInput = document.getElementById('command-palette-input');

    if (openSearchPaletteBtn) {
        openSearchPaletteBtn.addEventListener('click', () => {
            commandPaletteModal.show();
        });
    }

    if (commandPaletteModalEl) {
        commandPaletteModalEl.addEventListener('shown.bs.modal', () => {
            commandPaletteInput.focus();
        });
    }

    document.addEventListener('keydown', (e) => {
        // Use `e.metaKey` for Command key on macOS
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            commandPaletteModal.show();
        }
    });

    // Optional: Add search logic to the input
    if (commandPaletteInput) {
        commandPaletteInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if(query) {
                console.log(`Searching for: ${query}`);
                // Add search result rendering logic here
            }
        });
    }


    // --- Theme Switcher ---
    const htmlEl = document.documentElement;
    let kpiPriceChart, kpiConsumptionChart, kpiOverdueChart;

    const setTheme = (theme) => {
        htmlEl.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update active class on theme buttons
        document.querySelectorAll('[data-theme]').forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // We need to recreate charts on theme change
        if (typeof createCharts === 'function' && document.querySelector('.actual-content:not(.d-none)')) {
             setTimeout(createCharts, 50);
        }
        if (typeof createKpiCharts === 'function') {
            setTimeout(createKpiCharts, 50);
        }
    };

    document.querySelectorAll('[data-theme]').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedTheme = e.currentTarget.dataset.theme;
            setTheme(selectedTheme);
        });
    });

    const preferredTheme = localStorage.getItem('theme') || 'light';
    
    // --- Zen Mode ---
    const zenModeBtn = document.getElementById('zen-mode-btn');
    if (zenModeBtn) {
        const zenModeText = zenModeBtn.querySelector('span');
        zenModeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('zen-mode');
            const isZen = document.body.classList.contains('zen-mode');
            const lang = localStorage.getItem('language') || 'en';
            const enterKey = 'enterZenMode';
            const exitKey = 'exitZenMode';

            if (zenModeText) zenModeText.textContent = isZen ? translations[lang][exitKey] : translations[lang][enterKey];
            zenModeBtn.setAttribute('aria-label', isZen ? translations[lang][exitKey] : translations[lang][enterKey]);
        });
    }

    // --- Layout Toggle ---
    const layoutToggleBtn = document.getElementById('layout-toggle-btn');
    const dashboardGrid = document.getElementById('dashboard-grid');

    const setLayout = (layout) => {
        if (!dashboardGrid || !layoutToggleBtn) return;
        
        if (layout === 'list') {
            dashboardGrid.classList.add('dashboard-list-view');
        } else {
            dashboardGrid.classList.remove('dashboard-list-view');
        }
        localStorage.setItem('layout', layout);
    };

    if (layoutToggleBtn) {
        layoutToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isListView = dashboardGrid.classList.contains('dashboard-list-view');
            setLayout(isListView ? 'grid' : 'list');
        });
    }

    const preferredLayout = localStorage.getItem('layout') || 'grid';
    setLayout(preferredLayout);


    // --- Draggable Widgets (SortableJS) ---
    const grid = document.getElementById('dashboard-grid');
    if (grid) {
        new Sortable(grid, {
            animation: 150,
            handle: '.drag-handle',
            ghostClass: 'sortable-ghost',
            onStart: function () {
                grid.classList.add('dragging-active');
            },
            onEnd: function () {
                grid.classList.remove('dragging-active');
            }
        });
    }

    // --- Real-Time Update & Alert Simulation ---
    const lastUpdatedMarket = document.getElementById('last-updated-market');
    const lastUpdatedProcurement = document.getElementById('last-updated-procurement');
    const alertToastEl = document.getElementById('alert-toast');
    const alertToast = alertToastEl ? new bootstrap.Toast(alertToastEl) : null;
    let priceAlert = { enabled: false, threshold: 0 };

    const updateTime = () => {
        const timeString = new Date().toLocaleTimeString('en-US');
        const lang = localStorage.getItem('language') || 'en';
        const updatedText = lang === 'de' ? `Aktualisiert: ${timeString}` : `Updated: ${timeString}`;
        if (lastUpdatedMarket) {
            lastUpdatedMarket.textContent = updatedText;
            lastUpdatedMarket.classList.add('fade-in');
            setTimeout(() => lastUpdatedMarket.classList.remove('fade-in'), 500);
        }
        if (lastUpdatedProcurement) {
            lastUpdatedProcurement.textContent = updatedText;
            lastUpdatedProcurement.classList.add('fade-in');
            setTimeout(() => lastUpdatedProcurement.classList.remove('fade-in'), 500);
        }
        
        const currentPrice = 150 + Math.random() * 60;
        if (priceAlert.enabled && currentPrice > priceAlert.threshold && alertToast) {
            alertToastEl.querySelector('.toast-body').textContent = `Market price has exceeded your threshold of ${priceAlert.threshold} €/MWh. Current price: ${currentPrice.toFixed(2)} €/MWh.`;
            alertToast.show();
        }

        // Pulse effect on KPI cards
        document.querySelectorAll('.kpi-card .card-text').forEach(el => {
            el.classList.add('pulse-effect');
            setTimeout(() => el.classList.remove('pulse-effect'), 500);
        });
    };
    
    // --- Enhanced Notification Simulation ---
    const notificationBell = document.getElementById('notification-bell');
    if (notificationBell) {
        // Show notification badge by default on load
        notificationBell.classList.add('has-notification');

        const dropdownParent = notificationBell.parentElement;
        if (dropdownParent) {
            // When the dropdown is shown, mark notifications as "read" by removing the badge
            dropdownParent.addEventListener('show.bs.dropdown', () => {
                notificationBell.classList.remove('has-notification');
            });
        }
    }

    // --- Alerts Modal Logic ---
    const saveAlertsBtn = document.getElementById('save-alerts-btn');
    if (saveAlertsBtn) {
        saveAlertsBtn.addEventListener('click', () => {
            priceAlert.enabled = document.getElementById('price-alert-enabled').checked;
            priceAlert.threshold = parseFloat(document.getElementById('price-threshold').value) || 0;
            const alertsModalInstance = bootstrap.Modal.getInstance(document.getElementById('alerts-modal'));
            if (alertsModalInstance) alertsModalInstance.hide();
        });
    }
    
    // --- Scenario Planner Logic ---
    const calculateScenarioBtn = document.getElementById('calculate-scenario-btn');
    if (calculateScenarioBtn) {
        calculateScenarioBtn.addEventListener('click', () => {
            const price = parseFloat(document.getElementById('hypothetical-price').value) || 0;
            const consumption = parseFloat(document.getElementById('monthly-consumption').value) || 0;
            const cost = price * consumption;
            document.getElementById('estimated-cost').textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(cost);
        });
    }

    // --- Date Range Presets ---
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');
    const formatDate = (date) => date.toISOString().split('T')[0];

    if (fromDateInput && toDateInput) {
        toDateInput.value = formatDate(new Date());
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        fromDateInput.value = formatDate(thirtyDaysAgo);

        const dateRangePresets = document.getElementById('date-range-presets');
        if (dateRangePresets) {
            dateRangePresets.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    const range = e.target.dataset.range;
                    const today = new Date();
                    let startDate = new Date();
                    
                    if (range === '7' || range === '30') {
                        startDate.setDate(today.getDate() - parseInt(range));
                    } else if (range === 'month') {
                        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
                    } else if (range === 'ytd') {
                        startDate = new Date(today.getFullYear(), 0, 1);
                    }
                    
                    fromDateInput.value = formatDate(startDate);
                    toDateInput.value = formatDate(today);
                }
            });
        }
    }
    
    // --- Chart.js Configurations & Drill-down ---
    const generateData = (count, min, max) => Array.from({ length: count }, () => Math.random() * (max - min) + min);
    const generateLabels = (count, prefix) => Array.from({ length: count }, (_, i) => `${prefix} ${i + 1}`);
    let marketChart1, marketChart2, procurementChart, monitorChart, drilldownChart, costAllocationChart;
    const drilldownModalEl = document.getElementById('drilldown-modal');
    const drilldownModal = drilldownModalEl ? new bootstrap.Modal(drilldownModalEl) : null;
    
    const customChartColors = {
        light: {
            blue: { bg: 'rgba(54, 162, 235, 0.2)', border: 'rgba(54, 162, 235, 1)' },
            orange: { bg: 'rgba(255, 159, 64, 0.2)', border: 'rgba(255, 159, 64, 1)' },
            red: { bg: 'rgba(255, 99, 132, 0.2)', border: 'rgba(255, 99, 132, 1)' },
            green: { bg: 'rgba(75, 192, 192, 0.2)', border: 'rgba(75, 192, 192, 1)' },
            purple: { bg: 'rgba(153, 102, 255, 0.2)', border: 'rgba(153, 102, 255, 1)' },
            grey: { bg: 'rgba(201, 203, 207, 0.2)', border: 'rgba(201, 203, 207, 1)' }
        },
        dark: {
            blue: { bg: 'rgba(54, 162, 235, 0.2)', border: 'rgba(54, 162, 235, 1)' },
            orange: { bg: 'rgba(255, 159, 64, 0.2)', border: 'rgba(255, 159, 64, 1)' },
            red: { bg: 'rgba(255, 99, 132, 0.2)', border: 'rgba(255, 99, 132, 1)' },
            green: { bg: 'rgba(75, 192, 192, 0.2)', border: 'rgba(75, 192, 192, 1)' },
            purple: { bg: 'rgba(153, 102, 255, 0.2)', border: 'rgba(153, 102, 255, 1)' },
            grey: { bg: 'rgba(201, 203, 207, 0.2)', border: 'rgba(201, 203, 207, 1)' }
        },
        contrast: {
            blue: { bg: 'rgba(0, 255, 255, 0.5)', border: '#00FFFF' }, // Cyan
            orange: { bg: 'rgba(255, 255, 0, 0.5)', border: '#FFFF00' }, // Yellow
            red: { bg: 'rgba(255, 0, 0, 0.5)', border: '#FF0000' }, // Red
            green: { bg: 'rgba(0, 255, 0, 0.5)', border: '#00FF00' }, // Green
            purple: { bg: 'rgba(255, 0, 255, 0.5)', border: '#FF00FF' }, // Magenta
            grey: { bg: 'rgba(255, 255, 255, 0.5)', border: '#FFFFFF' } // White
        }
    };
    
    const getOrCreateTooltip = () => {
      let tooltipEl = document.getElementById('chartjs-tooltip');

      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = '<table></table>';
        document.body.appendChild(tooltipEl);
      }

      return tooltipEl;
    };

    const externalTooltipHandler = (context) => {
      // Tooltip Element
      const {chart, tooltip} = context;
      const tooltipEl = getOrCreateTooltip();

      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
      }

      // Set Text
      if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(b => b.lines);
        const tableHead = document.createElement('thead');
        titleLines.forEach(title => {
          const tr = document.createElement('tr');
          tr.style.borderWidth = 0;
          const th = document.createElement('th');
          th.style.borderWidth = 0;
          const text = document.createTextNode(title);
          th.appendChild(text);
          tr.appendChild(th);
          tableHead.appendChild(tr);
        });
        const tableBody = document.createElement('tbody');
        bodyLines.forEach((body, i) => {
          const colors = tooltip.labelColors[i];
          const span = document.createElement('span');
          span.className = 'tooltip-body-item-color';
          span.style.background = colors.backgroundColor;
          span.style.borderColor = colors.borderColor;
          span.style.borderWidth = '2px';
          const tr = document.createElement('tr');
          tr.style.backgroundColor = 'inherit';
          tr.style.borderWidth = 0;
          const td = document.createElement('td');
          td.style.borderWidth = 0;
          const text = document.createTextNode(body);
          td.appendChild(span);
          td.appendChild(text);
          tr.appendChild(td);
          tableBody.appendChild(tr);
        });
        const tableRoot = tooltipEl.querySelector('table');
        if (tableRoot) {
            while (tableRoot.firstChild) {
              tableRoot.firstChild.remove();
            }
            tableRoot.appendChild(tableHead);
            tableRoot.appendChild(tableBody);
        }
      }

      const canvasBounds = chart.canvas.getBoundingClientRect();

      // Display, position, and set styles for font
      tooltipEl.style.opacity = 1;
      
      // Position tooltip with a 15px offset from the cursor
      let left = canvasBounds.left + window.pageXOffset + tooltip.caretX + 15;
      let top = canvasBounds.top + window.pageYOffset + tooltip.caretY + 15;

      // If tooltip goes beyond right edge, flip to the left of the cursor
      if (left + tooltipEl.offsetWidth > document.documentElement.clientWidth) {
          left = canvasBounds.left + window.pageXOffset + tooltip.caretX - tooltipEl.offsetWidth - 15;
      }

      // If tooltip goes beyond bottom edge, flip above the cursor
      if (top + tooltipEl.offsetHeight > document.documentElement.clientHeight) {
          top = canvasBounds.top + window.pageYOffset + tooltip.caretY - tooltipEl.offsetHeight - 15;
      }

      tooltipEl.style.left = left + 'px';
      tooltipEl.style.top = top + 'px';
      tooltipEl.style.font = tooltip.options.bodyFont.string;
      tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
    };
    
    function createKpiCharts() {
        const currentTheme = htmlEl.getAttribute('data-bs-theme');
        const colors = customChartColors[currentTheme];
        const bodyColor = `rgb(${getComputedStyle(document.body).getPropertyValue('--bs-body-color-rgb').trim()})`;
        const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

        const baseKpiOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    displayColors: false,
                }
            },
            scales: {
                x: {
                    display: true,
                    ticks: {
                        font: { size: 9 },
                        color: bodyColor,
                    },
                    grid: { display: false }
                },
                y: { display: false }
            },
            elements: {
                point: {
                    radius: 1,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            },
        };

        if(kpiPriceChart) kpiPriceChart.destroy();
        if (document.getElementById('kpi-price-chart')) {
            const priceOptions = deepClone(baseKpiOptions);
            priceOptions.plugins.title = {
                display: true,
                text: '7-Day Price Trend (€/MWh)',
                position: 'top',
                align: 'center',
                font: { size: 12 },
                color: bodyColor,
                padding: { top: 5, bottom: 5 }
            };
            priceOptions.plugins.tooltip.callbacks = {
                title: () => '', // Hide title
                label: (c) => `Price: ${c.parsed.y.toFixed(2)} €/MWh`
            };
            kpiPriceChart = new Chart(document.getElementById('kpi-price-chart'), {
                type: 'line',
                data: {
                    labels: ['-6d', '-5d', '-4d', '-3d', '-2d', 'Yest.', 'Today'],
                    datasets: [{
                        data: generateData(7, 150, 165),
                        borderColor: colors.green.border,
                        tension: 0.4
                    }]
                },
                options: priceOptions
            });
        }
        
        if(kpiConsumptionChart) kpiConsumptionChart.destroy();
        if (document.getElementById('kpi-consumption-chart')) {
            const consumptionOptions = deepClone(baseKpiOptions);
            consumptionOptions.plugins.title = {
                display: true,
                text: '7-Day Consumption Trend (MWh)',
                position: 'top',
                align: 'center',
                font: { size: 12 },
                color: bodyColor,
                padding: { top: 5, bottom: 5 }
            };
            consumptionOptions.plugins.tooltip.callbacks = {
                title: () => '',
                label: (c) => `Consumption: ${c.parsed.y.toFixed(0)} MWh`
            };
            kpiConsumptionChart = new Chart(document.getElementById('kpi-consumption-chart'), {
                type: 'line',
                data: {
                    labels: ['-6d', '-5d', '-4d', '-3d', '-2d', 'Yest.', 'Today'],
                    datasets: [{
                        data: generateData(7, 700, 800),
                        borderColor: colors.blue.border,
                        tension: 0.4
                    }]
                },
                options: consumptionOptions
            });
        }
        
        if(kpiOverdueChart) kpiOverdueChart.destroy();
        if (document.getElementById('kpi-overdue-chart')) {
            const overdueOptions = deepClone(baseKpiOptions);
            overdueOptions.plugins.title = {
                display: true,
                text: '7-Day Overdue Invoices',
                position: 'top',
                align: 'center',
                font: { size: 12 },
                color: bodyColor,
                padding: { top: 5, bottom: 5 }
            };
            overdueOptions.plugins.tooltip.callbacks = {
                title: () => '',
                label: (c) => `${c.parsed.y} Overdue Invoice(s)`
            };
            kpiOverdueChart = new Chart(document.getElementById('kpi-overdue-chart'), {
                type: 'line',
                data: {
                    labels: ['-6d', '-5d', '-4d', '-3d', '-2d', 'Yest.', 'Today'],
                    datasets: [{
                        data: [0,0,0,1,1,0,1],
                        borderColor: colors.red.border,
                        tension: 0.4,
                        stepped: true
                    }]
                },
                options: overdueOptions
            });
        }
    }

    function createCharts() {
        const currentTheme = htmlEl.getAttribute('data-bs-theme');
        const colors = customChartColors[currentTheme];
        
        const bodyColor = `rgb(${getComputedStyle(document.body).getPropertyValue('--bs-body-color-rgb').trim()})`;
        Chart.defaults.color = bodyColor;
        Chart.defaults.borderColor = (currentTheme === 'contrast') ? '#FFFF00' : 'rgba(128,128,128,0.2)';

        const tooltipOptions = {
            enabled: false,
            external: externalTooltipHandler,
            intersect: false,
            mode: 'index',
            titleFont: { size: 16, weight: 'bold' },
            bodyFont: { size: 14 },
            padding: 12,
        };

        if(marketChart1) marketChart1.destroy();
        if (document.getElementById('marketChart1')) {
            marketChart1 = new Chart(document.getElementById('marketChart1').getContext('2d'), { type: 'line', data: { labels: generateLabels(50, 'Day'), datasets: [{ label: 'Market Price', data: generateData(50, 80, 200), borderColor: colors.orange.border, backgroundColor: colors.orange.bg, fill: true, tension: 0.4, pointRadius: 0 }] }, options: { responsive: true, maintainAspectRatio: false, animation: { duration: 1000 }, plugins: { legend: { display: false }, tooltip: { ...tooltipOptions, callbacks: { label: (c) => `${c.dataset.label}: ${c.parsed.y.toFixed(2)} €` } } }, scales: { y: { beginAtZero: false } } } });
        }
        if(marketChart2) marketChart2.destroy();
        if (document.getElementById('marketChart2')) {
            marketChart2 = new Chart(document.getElementById('marketChart2').getContext('2d'), { type: 'line', data: { labels: generateLabels(50, 'Day'), datasets: [ { label: 'Futures A', data: generateData(50, 100, 150), borderColor: colors.blue.border, backgroundColor: colors.blue.bg, fill: true, tension: 0.4, pointRadius: 0 }, { label: 'Futures B', data: generateData(50, 90, 160), borderColor: colors.red.border, backgroundColor: colors.red.bg, fill: true, tension: 0.4, pointRadius: 0 } ] }, options: { responsive: true, maintainAspectRatio: false, animation: { duration: 1000 }, plugins: { legend: { display: false }, tooltip: tooltipOptions }, scales: { y: { beginAtZero: false } } } });
        }
        if(procurementChart) procurementChart.destroy();
        if (document.getElementById('procurementChart')) {
            procurementChart = new Chart(document.getElementById('procurementChart').getContext('2d'), { type: 'line', data: { labels: generateLabels(12, 'Month'), datasets: [{ label: 'Portfolio Value', data: [160, 162, 165, 155, 158, 170, 185, 180, 175, 168, 162, 159], borderColor: colors.green.border, backgroundColor: colors.green.bg, fill: true, tension: 0.3 }, { label: 'Stop Loss', data: [150, 152, 155, 145, 148, 160, 175, 170, 165, 158, 152, 149], borderColor: colors.grey.border, borderDash: [5, 5], fill: false, pointRadius: 0 }] }, options: { responsive: true, animation: { duration: 1000 }, plugins: { legend: { display: false }, tooltip: tooltipOptions }, scales: { y: { beginAtZero: false, ticks: { display: false } }, x: { ticks: { display: false } } } } });
        }
        
        const monitorCanvas = document.getElementById('monitorChart');
        if(monitorChart) monitorChart.destroy();
        if (monitorCanvas) {
            monitorChart = new Chart(monitorCanvas, { type: 'bar', data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Energy Consumption', data: [500, 550, 600, 580, 620, 650, 750, 720, 680, 640, 600, 580], backgroundColor: colors.green.bg, borderColor: colors.green.border, borderWidth: 1 }] }, options: { responsive: true, maintainAspectRatio: false, animation: { duration: 1000 }, plugins: { legend: { position: 'top' }, tooltip: { ...tooltipOptions, callbacks: { label: (c) => `${c.dataset.label}: ${c.parsed.y.toFixed(0)} MWh` } } }, scales: { y: { beginAtZero: true } }, onClick: (e, elements) => {
                if (elements.length > 0) {
                    const elementIndex = elements[0].index;
                    const label = monitorChart.data.labels[elementIndex];
                    document.getElementById('drilldown-modal-label').textContent = `Daily Consumption for ${label}`;
                    
                    if(drilldownChart) drilldownChart.destroy();
                    drilldownChart = new Chart(document.getElementById('drilldown-chart'), { type: 'bar', data: { labels: generateLabels(30, 'Day'), datasets: [{ label: `Daily Consumption for ${label}`, data: generateData(30, 5, 30), backgroundColor: colors.blue.bg, borderColor: colors.blue.border, borderWidth: 1 }] }, options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } } });
                    if (drilldownModal) drilldownModal.show();
                }
            }} });
        }
        
        if(costAllocationChart) costAllocationChart.destroy();
        if (document.getElementById('costAllocationChart')) {
            costAllocationChart = new Chart(document.getElementById('costAllocationChart'), {
                type: 'pie',
                data: {
                    labels: ['Factory A', 'Office Building', 'Warehouse', 'Retail Store'],
                    datasets: [{
                        label: 'Cost Allocation',
                        data: [45, 25, 15, 15],
                        backgroundColor: [colors.red.border, colors.blue.border, colors.orange.border, colors.green.border],
                    }]
                },
                options: { responsive: true, maintainAspectRatio: true, animation: { duration: 1000 }, plugins: { legend: { position: 'bottom' } } }
            });
        }
    }
    
    // --- Simulate Loading ---
    const loadingBar = document.getElementById('loading-bar');
    if (loadingBar) {
        loadingBar.classList.add('loading');
    }

    setTimeout(() => {
        // Hide all skeletons
        document.querySelectorAll('.skeleton-loader').forEach(loader => {
            loader.classList.add('d-none');
        });

        // Show all actual content
        document.querySelectorAll('.actual-content').forEach(content => {
            content.classList.remove('d-none');
            // Special handling for flex containers
            if (content.classList.contains('flex-column') || content.classList.contains('d-flex')) {
                content.classList.add('d-flex');
            }
        });
        
        const preferredLanguage = localStorage.getItem('language') || 'en';
        setLanguage(preferredLanguage);
        
        // Initialize Popovers now that content is visible and translations are available
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        [...popoverTriggerList].map(function (popoverTriggerEl) {
            const lang = localStorage.getItem('language') || 'en';
            const titleKey = popoverTriggerEl.dataset.langKeyPopoverTitle;
            const contentKey = popoverTriggerEl.dataset.langKeyPopoverContent;
            return new bootstrap.Popover(popoverTriggerEl, {
                title: translations[lang][titleKey] || (translations['en'] ? translations['en'][titleKey] : ''),
                content: translations[lang][contentKey] || (translations['en'] ? translations['en'][contentKey] : ''),
                html: true
            });
        });

        // Initialize Tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

        // Now that canvases are visible, create the charts
        createCharts();
        createKpiCharts();
        
        // And start the real-time updates
        updateTime();
        setInterval(updateTime, 5000);

        // Hide loading bar
        if (loadingBar) {
            // A short delay to ensure the animation completes visually before hiding
            setTimeout(() => {
                 loadingBar.style.display = 'none';
            }, 500);
        }

    }, 1500); // Simulate a 1.5 second load time

    // --- Global Status Indicator Simulation ---
    setTimeout(() => {
        const statusIndicator = document.getElementById('status-indicator');
        if (statusIndicator) {
            statusIndicator.classList.add('status-warning');
            const tooltip = bootstrap.Tooltip.getInstance(statusIndicator);
            if (tooltip) {
                tooltip.setContent({ '.tooltip-inner': 'Minor Delays Detected' });
            }
        }
    }, 15000); // After 15 seconds, simulate a warning
    
    // --- Export Functionality ---
    function exportChartToCSV(chart, filename) {
        if (!chart) return;
        const { labels, datasets } = chart.data;
        let csv = [];
        const header = ['Label', ...datasets.map(ds => ds.label)];
        csv.push(header.join(','));
        labels.forEach((label, i) => {
            const row = [label, ...datasets.map(ds => ds.data[i])];
            csv.push(row.join(','));
        });
        const csvString = csv.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const exportMarketCsv = document.getElementById('export-market-csv');
    if (exportMarketCsv) {
        exportMarketCsv.addEventListener('click', (e) => { e.preventDefault(); exportChartToCSV(marketChart1, 'market-overview.csv'); });
    }
    const exportMonitorCsv = document.getElementById('export-monitor-csv');
    if (exportMonitorCsv) {
        exportMonitorCsv.addEventListener('click', (e) => { e.preventDefault(); exportChartToCSV(monitorChart, 'monitor-consumption.csv'); });
    }
    
    // --- PDF Report Generation ---
    const generatePdfBtn = document.getElementById('generate-pdf-btn');
    if (generatePdfBtn) {
        generatePdfBtn.addEventListener('click', async () => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            const reportForm = document.getElementById('report-form');
            const selectedWidgets = Array.from(reportForm.elements).filter(el => el.checked).map(el => document.getElementById(el.value));
            
            generatePdfBtn.disabled = true;
            generatePdfBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Generating...`;

            let y = 15;
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 15;
            
            doc.text("Energy Dashboard Report", margin, y);
            y += 10;

            for (const widget of selectedWidgets) {
                if (!widget) continue;
                const canvas = await html2canvas(widget);
                const imgData = canvas.toDataURL('image/png');
                const imgProps = doc.getImageProperties(imgData);
                const pdfWidth = doc.internal.pageSize.getWidth() - 2 * margin;
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                if (y + pdfHeight > pageHeight - margin) {
                    doc.addPage();
                    y = margin;
                }
                
                doc.addImage(imgData, 'PNG', margin, y, pdfWidth, pdfHeight);
                y += pdfHeight + 10;
            }
            
            doc.save('dashboard-report.pdf');
            generatePdfBtn.disabled = false;
            generatePdfBtn.textContent = 'Generate PDF';
            const reportModalInstance = bootstrap.Modal.getInstance(document.getElementById('report-modal'));
            if (reportModalInstance) reportModalInstance.hide();
        });
    }
    
    // --- Data Comparison & Forecast Tool ---
    const compareToggle = document.getElementById('compare-toggle');
    const compareDateRange = document.getElementById('compare-date-range');
    const updateComparisonBtn = document.getElementById('update-comparison-btn');
    const forecastToggle = document.getElementById('forecast-toggle');
    const compareFromDateInput = document.getElementById('compare-from-date');
    const compareToDateInput = document.getElementById('compare-to-date');

    function updateComparisonChart() {
        if (!monitorChart) return;
        const compareIndex = monitorChart.data.datasets.findIndex(ds => ds.label === 'Comparison Period');
        if (compareIndex > -1) {
            monitorChart.data.datasets.splice(compareIndex, 1);
        }
        
        const newDataset = {
            label: 'Comparison Period',
            data: generateData(12, 150, 750),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            type: 'line',
            order: 0
        };
        monitorChart.data.datasets.push(newDataset);
        monitorChart.update();
    }

    if (compareToggle) {
        compareToggle.addEventListener('change', () => {
            compareDateRange.classList.toggle('d-none');
            compareDateRange.classList.toggle('d-flex');
            
            if (compareToggle.checked) {
                // Set default dates to the previous year relative to the main date picker
                const mainFromDate = new Date(document.getElementById('from-date').value);
                const mainToDate = new Date(document.getElementById('to-date').value);

                mainFromDate.setFullYear(mainFromDate.getFullYear() - 1);
                mainToDate.setFullYear(mainToDate.getFullYear() - 1);

                if(compareFromDateInput) compareFromDateInput.value = formatDate(mainFromDate);
                if(compareToDateInput) compareToDateInput.value = formatDate(mainToDate);

                // Trigger update immediately
                updateComparisonChart();
            } else {
                // If toggled off, remove the comparison data
                if (monitorChart && monitorChart.data.datasets.length > 1) {
                    const compareIndex = monitorChart.data.datasets.findIndex(ds => ds.label === 'Comparison Period');
                    if (compareIndex > -1) {
                        monitorChart.data.datasets.splice(compareIndex, 1);
                        monitorChart.update();
                    }
                }
            }
        });
    }

    if (updateComparisonBtn) {
        updateComparisonBtn.addEventListener('click', updateComparisonChart);
    }
    
    if (forecastToggle) {
        forecastToggle.addEventListener('change', () => {
            if (!monitorChart) return;
            const forecastIndex = monitorChart.data.datasets.findIndex(ds => ds.label === 'Forecast');
            if (forecastToggle.checked) {
                if (forecastIndex === -1) {
                    const lastDataPoint = monitorChart.data.datasets[0].data.slice(-1)[0];
                    const forecastData = [lastDataPoint, lastDataPoint * 0.95, lastDataPoint * 1.05];
                    const forecastLabels = ['Jan (F)', 'Feb (F)', 'Mar (F)'];
                    
                    const forecastDataset = {
                        label: 'Forecast',
                        data: [...new Array(12).fill(null), ...forecastData], // Pad with nulls
                        backgroundColor: 'rgba(153, 102, 255, 0.5)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderDash: [5, 5],
                        borderWidth: 2,
                        type: 'line',
                        order: 0,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    };
                    monitorChart.data.labels = [...monitorChart.data.labels.slice(0, 12), ...forecastLabels];
                    monitorChart.data.datasets.push(forecastDataset);
                    monitorChart.update();
                }
            } else {
                if (forecastIndex > -1) {
                    monitorChart.data.datasets.splice(forecastIndex, 1);
                    monitorChart.data.labels = monitorChart.data.labels.slice(0, 12);
                    monitorChart.update();
                }
            }
        });
    }

    // --- Add to Calendar ---
    document.querySelectorAll('.add-to-calendar-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const title = e.target.dataset.title;
            const date = e.target.dataset.date;
            generateICS(title, date);
        });
    });

    function generateICS(title, date) {
        const startDate = new Date(date);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 1);

        const formatDate = (d) => {
            return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        }

        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Enerlytics//Dashboard//EN',
            'BEGIN:VEVENT',
            `UID:${Date.now()}@enerlytics.com`,
            `DTSTAMP:${formatDate(new Date())}`,
            `DTSTART;VALUE=DATE:${formatDate(startDate).substring(0,8)}`,
            `DTEND;VALUE=DATE:${formatDate(endDate).substring(0,8)}`,
            `SUMMARY:${title}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `${title}.ics`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    // --- Onboarding Tour ---
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-light',
            scrollTo: true
        }
    });

    tour.addStep({
        id: 'step-1',
        text: 'Welcome to your Energy Management Dashboard! Let\'s take a quick tour of the key features.',
        attachTo: { element: '#open-search-palette', on: 'bottom' },
        buttons: [
            {
                text: 'Skip',
                action: tour.complete,
                classes: 'shepherd-button-secondary'
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });
    tour.addStep({
        id: 'step-2',
        text: 'You can rearrange the widgets by dragging their titles to customize your layout.',
        attachTo: { element: '#widget-monitor .drag-handle', on: 'bottom' },
        buttons: [
            {
                text: 'Back',
                action: tour.back,
                classes: 'shepherd-button-secondary'
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });
    tour.addStep({
        id: 'step-3',
        text: 'Click on a bar in the Monitor chart to see a detailed daily breakdown.',
        attachTo: { element: '#widget-monitor', on: 'top' },
        buttons: [
            {
                text: 'Back',
                action: tour.back,
                classes: 'shepherd-button-secondary'
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });
    tour.addStep({
        id: 'step-4',
        text: 'Use the settings menu to change the theme and layout.',
        attachTo: { element: '[aria-label="Settings"]', on: 'bottom' },
        buttons: [
            {
                text: 'Back',
                action: tour.back,
                classes: 'shepherd-button-secondary'
            },
            {
                text: 'Finish',
                action: tour.complete
            }
        ]
    });

    setTimeout(() => {
        if (document.querySelector('#open-search-palette')) {
            tour.start();
        }
    }, 2000); 
    
    const helpLink = document.getElementById('help-link');
    if (helpLink) {
        helpLink.addEventListener('click', (e) => {
            e.preventDefault();
            tour.start();
        });
    }

    // --- KPI Goals ---
    const saveKpiGoalsBtn = document.getElementById('save-kpi-goals-btn');
    const consumptionGoalInput = document.getElementById('consumption-goal');
    const priceGoalInput = document.getElementById('price-goal');
    const consumptionProgress = document.getElementById('consumption-progress');
    const priceProgress = document.getElementById('price-progress');
    const currentConsumption = 750; // Static value for now
    const currentPrice = 159.78; // Static value for now

    function updateKpiVisuals() {
        if (!consumptionGoalInput || !priceGoalInput || !consumptionProgress || !priceProgress) return;
        
        const consumptionGoal = parseFloat(localStorage.getItem('consumptionGoal')) || 1000;
        const priceGoal = parseFloat(localStorage.getItem('priceGoal')) || 150;
        
        consumptionGoalInput.value = consumptionGoal;
        priceGoalInput.value = priceGoal;
        
        // Update consumption progress
        let consumptionPercent = Math.round((currentConsumption / consumptionGoal) * 100);
        if(consumptionPercent > 100) consumptionPercent = 100;
        consumptionProgress.style.width = `${consumptionPercent}%`;
        consumptionProgress.setAttribute('aria-valuenow', consumptionPercent);
        
        // Update price progress (lower is better)
        let pricePercent = Math.round((priceGoal / currentPrice) * 100);
        if(pricePercent > 100) pricePercent = 100;
        priceProgress.style.width = `${pricePercent}%`;
        priceProgress.setAttribute('aria-valuenow', pricePercent);
        priceProgress.classList.toggle('bg-danger', currentPrice > priceGoal);
        priceProgress.classList.toggle('bg-success', currentPrice <= priceGoal);
    }
    
    if (saveKpiGoalsBtn) {
        saveKpiGoalsBtn.addEventListener('click', () => {
            localStorage.setItem('consumptionGoal', consumptionGoalInput.value);
            localStorage.setItem('priceGoal', priceGoalInput.value);
            updateKpiVisuals();
            const kpiGoalsModalInstance = bootstrap.Modal.getInstance(document.getElementById('kpi-goals-modal'));
            if (kpiGoalsModalInstance) kpiGoalsModalInstance.hide();
        });
    }
    
    updateKpiVisuals();
    
    document.querySelector('.header-controls').addEventListener('click', (e) => {
        const langBtn = e.target.closest('[data-lang]');
        if (langBtn) {
            setLanguage(langBtn.dataset.lang);
        }
    });


    const preferredLanguage = localStorage.getItem('language') || 'en';
    setLanguage(preferredLanguage);
    
    // --- Comment & Collaboration ---
    const commentModalEl = document.getElementById('comment-modal');
    const commentModalLabel = document.getElementById('comment-modal-label');
    const commentList = document.getElementById('comment-list');
    const commentForm = document.getElementById('comment-form');
    const commentText = document.getElementById('comment-text');
    let activeWidgetId = null;

    // In-memory store for comments
    const comments = {
        'widget-market-overview': [{ user: 'Alice', text: 'Market seems volatile this week.', time: '2 hours ago' }],
        'widget-procurement': [],
        'widget-invoice-audit': [{ user: 'Bob', text: 'Please double-check invoice for MaLo 5xxxxxxxxxx03.', time: '1 day ago' }],
        'widget-energy-services': [],
        'widget-scenario-planner': [],
        'widget-audit-trail': [],
        'widget-due-dates': [],
        'widget-monitor': [{ user: 'Charlie', text: 'Consumption spike in July needs investigation.', time: '3 days ago' }]
    };

    function renderComments() {
        if (!activeWidgetId || !commentList) return;
        const lang = localStorage.getItem('language') || 'en';
        commentList.innerHTML = '';
        const widgetComments = comments[activeWidgetId] || [];
        if (widgetComments.length === 0) {
            commentList.innerHTML = `<p class="text-muted">${translations[lang].noCommentsYet}</p>`;
            return;
        }
        widgetComments.forEach(comment => {
            const commentEl = document.createElement('div');
            commentEl.classList.add('mb-2', 'p-2', 'rounded', 'bg-light');
            if (document.documentElement.dataset.bsTheme === 'dark') {
                commentEl.classList.add('bg-opacity-10');
            }
            commentEl.innerHTML = `<div class="d-flex justify-content-between"><strong>${comment.user}</strong><small class="text-muted">${comment.time}</small></div><p class="mb-0">${comment.text}</p>`;
            commentList.appendChild(commentEl);
        });
    }

    if (commentModalEl) {
        commentModalEl.addEventListener('show.bs.modal', (event) => {
            const button = event.relatedTarget;
            activeWidgetId = button.getAttribute('data-widget-id');
            const widgetTitleEl = document.querySelector(`#${activeWidgetId} h2`);
            const lang = localStorage.getItem('language') || 'en';
            if (widgetTitleEl) {
                const widgetTitle = widgetTitleEl.textContent;
                commentModalLabel.textContent = `${translations[lang].commentsOn} ${widgetTitle}`;
            }
            renderComments();
        });
    }

    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newCommentText = commentText.value.trim();
            if (newCommentText && activeWidgetId) {
                comments[activeWidgetId].push({
                    user: 'You', // In a real app, this would be the logged-in user
                    text: newCommentText,
                    time: 'Just now'
                });
                commentText.value = '';
                renderComments();
            }
        });
    }
    
    // --- Empty State for Due Dates ---
    const clearDueDatesBtn = document.getElementById('clear-due-dates-btn');
    const dueDatesList = document.getElementById('due-dates-list');
    const emptyState = document.getElementById('due-dates-empty-state');

    if (clearDueDatesBtn) {
        clearDueDatesBtn.addEventListener('click', () => {
            if (dueDatesList) dueDatesList.classList.add('d-none');
            clearDueDatesBtn.parentElement.classList.add('d-none');
            if (emptyState) emptyState.classList.remove('d-none');
        });
    }

    setTheme(preferredTheme);
});
