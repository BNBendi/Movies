public String createCustomer(User user) {
    // Stripe API hívás
    String customerId = "stripe_123"; // ezt kapod vissza

    user.setPaymentCustomerId(customerId);
    userRepository.save(user);

    return customerId;
}