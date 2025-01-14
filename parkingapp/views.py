from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login

# Create your views here.



class HomePage(TemplateView):
    template_name = "index.html"



from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

# View for Login or Register page
def login_register(request):
    if request.user.is_authenticated:
        # If the user is already logged in, redirect them to another page (e.g., dashboard)
        return redirect('dashboard')  # Ensure the name matches the URL name for the dashboard
    
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        # Authenticate the user
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            # After successful login, redirect to a different page (e.g., dashboard)
            #return redirect('dashboard')  # Ensure 'dashboard' is a valid URL name
            return render(request, 'dashboard.html', {'error': 'Invalid credentials'})
        else:
            # Handle invalid login (optional)
            return render(request, 'dashboard.html', {'error': 'Invalid credentials'})
    
    return render(request, 'login.html')

# View for the Dashboard or another page
def dashboard(request):
    return render(request, 'dashboard.html')
