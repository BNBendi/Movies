import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(@RequestBody AuthRequest req) {
        return authService.register(req.getEmail(), req.getPassword());
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest req) {
        return authService.login(req.getEmail(), req.getPassword());
    }
}