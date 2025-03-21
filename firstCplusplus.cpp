#include <iostream>
#include <iomanip>
#include <cmath>
#include <mpfr.h> // For arbitrary precision floating-point arithmetic

int main() {
    mpfr_t pi;
    mpfr_init2(pi, 1000); // Initialize pi with 1000 decimal precision

    // Chudnovsky algorithm for Pi
    mpfr_const_pi(pi, MPFR_RNDN); // Direct calculation of Pi to 1000 decimals using MPFR

    // Print pi with 1000 decimal places
    mpfr_exp_t exp;
    char pi_str[1100]; // Buffer for 1000 decimal digits plus extra for the "3." part
    mpfr_sprintf(pi_str, "%.1000Rf", pi);

    std::cout << "Pi to 1000 decimal places: \n";
    std::cout << pi_str << std::endl;

    mpfr_clear(pi); // Free the memory used by pi
    return 0;
}
