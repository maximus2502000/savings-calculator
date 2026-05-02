Add-Type -AssemblyName System.Drawing

$w = 1200; $h = 630
$b = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($b)
$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background gradient
$grad = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point($w, $h)),
    [System.Drawing.Color]::FromArgb(255, 30, 20, 90),
    [System.Drawing.Color]::FromArgb(255, 76, 29, 149)
)
$g.FillRectangle($grad, 0, 0, $w, $h)

# Glow blobs
$g.FillEllipse(
    (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 139, 92, 246))),
    780, -160, 620, 620)
$g.FillEllipse(
    (New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(30, 251, 191, 36))),
    -120, 310, 480, 480)

# String format — centred
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment     = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Near

# Headline — white
$f1    = New-Object System.Drawing.Font('Arial', 72, [System.Drawing.FontStyle]::Bold)
$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.DrawString('How Long Will Your', $f1, $white,
    (New-Object System.Drawing.RectangleF(60, 120, 1080, 110)), $sf)

# Headline — yellow accent
$yellow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 253, 211, 77))
$g.DrawString('Savings Last?', $f1, $yellow,
    (New-Object System.Drawing.RectangleF(60, 238, 1080, 110)), $sf)

# Tagline — two lines, no wrapping risk
$f2  = New-Object System.Drawing.Font('Arial', 26, [System.Drawing.FontStyle]::Regular)
$mut = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(170, 255, 255, 255))
$g.DrawString('Enter your numbers. Get your runway.',
    $f2, $mut, (New-Object System.Drawing.RectangleF(60, 392, 1080, 44)), $sf)
$g.DrawString("Plus a roast you didn't ask for.",
    $f2, $mut, (New-Object System.Drawing.RectangleF(60, 438, 1080, 44)), $sf)

# Divider line
$g.DrawLine(
    (New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(55, 255, 255, 255), 1)),
    480, 510, 720, 510)

# Domain
$f3  = New-Object System.Drawing.Font('Arial', 24, [System.Drawing.FontStyle]::Bold)
$dom = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 253, 230, 138))
$g.DrawString('savingsroast.com', $f3, $dom,
    (New-Object System.Drawing.RectangleF(60, 524, 1080, 50)), $sf)

# Save
$b.Save('C:\Users\maxim\savings-calculator\og-image.png',
    [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$b.Dispose()
Write-Host 'OG image saved.'
