import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;

    private String role; // pl. USER, ADMIN

    // Stripe customer ID (nem bankkártya!)
    private String paymentCustomerId;

    public User() {}

    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.role = "USER";
    }

    // getter + setter
}