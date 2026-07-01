$files = @(
    "AICTEDisclosurePage.jsx",
    "BPUTAffiliationPage.jsx",
    "NAACPage.jsx",
    "NBAPage.jsx",
    "FinancialAuditsPage.jsx",
    "AntiRaggingPage.jsx",
    "AlumniPage.jsx",
    "LibraryPage.jsx",
    "IQACPage.jsx",
    "TestimonialsPage.jsx",
    "StudentClubsPage.jsx",
    "CiscoThingQbatorPage.jsx",
    "GrievancePage.jsx",
    "ICCPage.jsx",
    "AboutPage.jsx",
    "NIRFPage.jsx",
    "SIROPage.jsx",
    "CareerPage.jsx",
    "InformationBrochurePage.jsx",
    "PrivacyPolicyPage.jsx",
    "DisclaimerPage.jsx",
    "TermsOfUsePage.jsx"
)

foreach ($f in $files) {
    $source = "d:\OFFICE\triddent 4\temp-app\src\pages\$f"
    $dest = "d:\OFFICE\capuslifee222\campus-life2\src\pages\"
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $dest -Force
        Write-Host "Copied $f"
    } else {
        Write-Host "File not found: $source"
    }
}
